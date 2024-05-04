require('dotenv').config()
const { generateToken } = require('../helpers/token')
const Router = require('koa-router')
const routes = new Router()

routes.post('/authenticate', async (ctx, next) => {
    const body = {
      test: 'something'
    }

    const apiToken = generateToken(body);
    ctx.body = apiToken;
});

module.exports = routes;