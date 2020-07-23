<h1 align="center">
  <img alt="GoBarber" title="GoBarber" src="https://github.com/lucaslamar/go-baber-api/blob/master/src/img/68747470733a2f2f726f636b6574736561742d63646e2e73332d73612d656173742d312e616d617a6f6e6177732e636f6d2f626f6f7463616d702d6865616465722e706e67.png" width="200px" />
</h1>

# API GoBarber
> GoBarber is a scheduling management system between customers and providers.

With Gobarber it is possible to register a user with a photo and say whether he is a service provider or not. The common user can register an appointment for a specific day with a provider and the specific provider can cancel this schedule.

 ## First Steps

 <h3>Prerequisites</h3>

<ul>
    <li> <a href="https://nodejs.org/en/download/package-manager/"> NodeJS </a></li>
    <li> <a href="https://yarnpkg.com/en/docs/getting-started">Yarn</a> </li>
    <li> <a href="https://www.docker.com/get-started"> Docker </a> </li>
</ul>

<h4>REST API Client</h4>
<ul>
  <li><a href="https://insomnia.rest/">Insomnia</a></li>
  <li><a href="https://www.getpostman.com/">Postman</a></li>
  <li><a href="https://install.advancedrestclient.com/install">Advanced REST Client</a></li>
</ul>


## Development Configurations

After clone this repository and install prerequisites

- Run **`yarn`** to install dependencies;
- Create a container of **postgres** database;
    >`docker run --name gobarber-db  -e POSTGRES_PASSWORD=<Senha> -e POSTGRES_DB=goBarberDb -d -p 5433:5432 postgres:11`
- Create a container of **redis**;
    >`docker run --name redisbarber -p 6379:6379 -d -t redis:alpine`
- Create a container of **MongoDB**
    >`docker run --name mongobarber -p 27017:27017 -d -t mongo`
- Create a file **`.env`** based on **`.env.example`** with all variables and their values;
- Run **`yarn sequelize db:migrate`** to create db migrations;
- Run **`yarn dev`** to start the project;
- Run **`yarn queue`** in another terminal to start the jobs queue;

Now you can use REST API Client to test "**GoBarber**".

## Building with
<ul>
  <li>NodeJS</li>
  <li>Docker</li>
  <li>PostgreSQL</li>
  <li>Mailtrap.io</li>
  <li>Redis</li>
  <li>MongoDB</li>
</ul>

## Tools
<ul>
  <li>Express</li>
  <li>Sucrase</li>
  <li>Nodemon</li>
  <li>ESLint + Prettier + EditorConfig</li>
  <li>Sequelize + Mongoose</li>
  <li>Sentry</li>
</ul>
