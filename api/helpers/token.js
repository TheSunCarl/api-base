require('dotenv').config()
const { sign, verify } = require('jsonwebtoken')

function generateToken(body, clientSecret = process.env.CLIENT_SECRET){
  let token = sign(
    body,
    clientSecret,
    {
      expiresIn: '24h'
    }
  );

  return token;
}

function verifyToken(token, clientSecret = process.env.CLIENT_SECRET){
  const decodedToken = verify(token, clientSecret);
  return decodedToken;
}

module.exports = { generateToken, verifyToken };