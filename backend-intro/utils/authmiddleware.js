const jwt = require('jsonwebtoken');
const SECRET = 'segredo-mockado';

module.exports = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ erro: 'Token não fornecido' });

  try {
    const decoded = jwt.verify(token.replace('Bearer ', ''), SECRET);
    req.usuario = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ erro: 'Token inválido' });
  }
};
