const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 3000;
const SECRET_KEY = "minha_chave_secreta_super_protegida";

app.use(express.json());

let usuarios = [
  { id: 1, nome: "matheus", email: "matheusdivonico@gmail.com", senha: "lindoperfeito" }
];

let medicos = [
  { id: 1, nome: "Dr. João Silva", especialidade: "Cardiologia", crm: "12345-SP" },
  { id: 2, nome: "Dr. Carlos Alves", especialidade: "Cardiologia", crm: "11111-SP" }
];

const verificarToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(403).json({ mensagem: "Token não fornecido." });

  const tokenLimpo = token.split(" ")[1] || token;

  jwt.verify(tokenLimpo, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(401).json({ mensagem: "Token inválido." });
    req.userId = decoded.id;
    next();
  });
};

app.post("/login", (req, res) => {
  const { email, senha } = req.body;
  const usuario = usuarios.find(u => u.email === email && u.senha === senha);

  if (usuario) {
    const token = jwt.sign({ id: usuario.id }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ mensagem: "Bem-vindo!", token });
  } else {
    res.status(401).json({ mensagem: "Credenciais inválidas." });
  }
});

app.get("/usuarios", verificarToken, (req, res) => {
  const listaSegura = usuarios.map(({ senha, ...resto }) => resto);
  res.json(listaSegura);
});

app.post("/usuarios", (req, res) => {
  const { nome, email, senha } = req.body;
  const novoUsuario = { id: Date.now(), nome, email, senha };
  usuarios.push(novoUsuario);
  res.status(201).json({ mensagem: "Usuário criado!", id: novoUsuario.id });
});

app.put("/usuarios/:id", verificarToken, (req, res) => {
  const id = parseInt(req.params.id);
  const index = usuarios.findIndex(u => u.id === id);

  if (index !== -1) {
    usuarios[index] = { ...usuarios[index], ...req.body, id };
    res.json({ mensagem: "Usuário atualizado!" });
  } else {
    res.status(404).json({ mensagem: "Usuário não encontrado." });
  }
});

app.delete("/usuarios/:id", verificarToken, (req, res) => {
  const id = parseInt(req.params.id);
  usuarios = usuarios.filter(u => u.id !== id);
  res.json({ mensagem: "Usuário removido com sucesso." });
});

app.get("/medicos", verificarToken, (req, res) => {
  res.json(medicos);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});