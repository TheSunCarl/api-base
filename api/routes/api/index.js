const { authMiddleware } = require('../../middleware/auth');
const Router = require('koa-router')

const userRoutes = require('./user')

const routes = new Router({prefix: "/api"});

routes.use(
  authMiddleware,
  userRoutes.routes(),
);

module.exports = routes;
