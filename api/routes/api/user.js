const Router = require('koa-router')
const UserController = require('../../controllers/user-controller')
const userController = new UserController()

const routes = new Router({ prefix: "/users" });

routes.get('/', async function(ctx, next){ await userController.list(ctx, next) });

module.exports = routes;