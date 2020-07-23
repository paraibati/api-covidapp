import './bootstrap';
import express from 'express';
import path from 'path';
import * as Sentry from '@sentry/node';
import Youch from 'youch';
import 'express-async-errors';
import cors from 'cors';

import routes from './routes';
import './database';

import sentryConfig from './config/sentry';

const PREFIX_API_ROUTE = process.env.PREFIX_API_ROUTE || '';

class App {
  constructor() {
    this.server = express();

    if (process.env.NODE_ENV === 'development') {
      sentryConfig = {};
    }
    Sentry.init(sentryConfig);

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(Sentry.Handlers.requestHandler());
    this.server.use(cors());
    this.server.use(express.json()); // Receber requests do tipo JSON
    this.server.use(
      `${PREFIX_API_ROUTE}/files`,
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(PREFIX_API_ROUTE, routes);
    this.server.use(Sentry.Handlers.errorHandler());
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();
        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: 'Internal server error' });
    });
  }
}

export default new App().server;
