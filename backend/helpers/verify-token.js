// Esse middleware é responsável por garantir a segurança de acesso nas rotas. Verificando se esta chegando o token e se ele está correto.
// This middleware is responsible for ensuring access security in routes. It checks if the token is being provided and if it is correct.

const jwt = require('jsonwebtoken')
const getToken = require('./get-token')

//middleware to validate token
const checkToken = (req, res, next) => {
  if(!req.headers.authorization){
    return res.status(401).json({ message: 'Acesso negado'})
  }

  const token = getToken(req)

  if(!token){
    return res.status(401).json({ message: 'Acesso negado'})
  }

  try{

    const verified = jwt.verify(token, 'nossosecret')
    req.user = verified
    next()
  }catch(err){
    return res.status(400).json({ message: 'Token inválido'})
  }
}

module.exports = checkToken