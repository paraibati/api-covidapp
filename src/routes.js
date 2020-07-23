import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/api/v1/UserController';
import SessionController from './app/controllers/api/v1/SessionController';
import FileController from './app/controllers/api/v1/FileController';
import NotificationController from './app/controllers/api/v1/NotificationController';

import validateUserStore from './app/validators/UserStore';
import validateUserUpdate from './app/validators/UserUpdate';
import validateSessionCreate from './app/validators/SessionCreate';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/api/v1/users', validateUserStore, UserController.store);
routes.post('/api/v1/sessions', validateSessionCreate, SessionController.store);

routes.use(authMiddleware);

routes.put('/api/v1/users', validateUserUpdate, UserController.update);

routes.get('/api/v1/notifications', NotificationController.index);
routes.put('/api/v1/notifications/:id', NotificationController.update);

routes.post('/api/v1/files', upload.single('file'), FileController.store);

export default routes;
