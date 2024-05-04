require('dotenv').config()
const Knex = require("knex")
const Koa = require("koa")
const routes = require('./routes')
const bodyParser = require("koa-bodyparser")
const objection = require("objection")
const knexConfig = require("./config/knexfile")
const cors = require('@koa/cors')

const knex = Knex(knexConfig[process.env.NODE_ENV || "development"])

objection.Model.knex(knex)

const app = new Koa()

app
  .use(cors())
  .use(bodyParser())
  .use(routes.routes());

const port = Number(process.env.API_PORT) || 3000;

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
