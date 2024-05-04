const { verifyToken } = require('../helpers/token')

async function authMiddleware(ctx, next){
  const bearer = ctx.request.header.authorization;

  if (!bearer) {
    throw new Error('no bearer found')
  }

  const token = bearer.substring(7, bearer.length);
  const payload = verifyToken(token);

  if (!payload) {
    throw new Error('no payload found')
  }

  ctx.user = payload;

  await next();
}
 
module.exports = { authMiddleware }