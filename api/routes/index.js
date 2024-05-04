const Router = require('koa-router')
const apiRoutes = require('./api')
const authRoutes = require('./auth')

const routes = new Router();

routes.use(
	apiRoutes.routes(),
	authRoutes.routes()
);

module.exports = routes;