require('dotenv').config({ path: "../../.env" });;
const path = require('path');
const objection = require("objection");

const config = {
  development: {
    debug: true,
    client: process.env.DB_DRIVER,
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      charset: "utf8",
    },
    migrations: {
      directory: path.join(__dirname, "..", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "..", "seeds"),
    },
    ...objection.knexSnakeCaseMappers(),
  },
  production: {
    debug: false,
    client: process.env.DB_DRIVER,
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      charset: "utf8",
    },
    migrations: {
      directory: path.join(__dirname, "..", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "..", "seeds"),
    },
    ...objection.knexSnakeCaseMappers(),
  },
};

module.exports = config
