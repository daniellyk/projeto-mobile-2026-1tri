const usuarios = require('../models/usuarios');
const jwt = require('jsonwebtoken');

const SECRET = 'segredo-mockado';

exports.login = (req, res) => {
  const { email, senha } = req.body;
  const usuario = usuarios.find(u => u.email === email && u.senha === senha);

  if (!usuario) return res.status(401).json({ erro: 'Credenciais inválidas' });

  const token = jwt.sign({ id: usuario.id, email: usuario.email }, SECRET, { expiresIn: '1h' });
  res.json({ token });
};
