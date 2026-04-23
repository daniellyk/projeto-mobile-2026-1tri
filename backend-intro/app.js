const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");


const app = express();
const PORT = 3000;
const SECRET_KEY = "minha_chave_secreta_super_protegida";


app.use(express.json());
app.use(cors());


let usuarios = [
  { id: 1, nome: "matheus", email: "mateusdivonico@gmail.com", senha: "lindoperfeito" }
];


let medicos = [
  { id: 1, nome: "Dr. Roberto Silva", crm: "CRM-12345-PR", especialidade: "Cardiologia", local: "Hospital Santa Cruz", convenios: "Unimed, Amil, Particular" },
  { id: 2, nome: "Dra. Ana Beatriz", crm: "CRM-98765-PR", especialidade: "Cardiologia", local: "Clínica Heart", convenios: "Sulamérica, Cassi, Bradesco" },
  { id: 3, nome: "Dr. Marcos Pontes", crm: "CRM-45612-PR", especialidade: "Cardiologia", local: "Hospital do Coração", convenios: "Unimed, Particular" },
  { id: 4, nome: "Dra. Julia Meirelles", crm: "CRM-11223-PR", especialidade: "Dermatologista", local: "Centro Skin Care", convenios: "Unimed, Particular, Sanepar" },
  { id: 5, nome: "Dr. Fabio Junior", crm: "CRM-33445-PR", especialidade: "Dermatologista", local: "Clínica Derma", convenios: "Amil, Particular" },
  { id: 6, nome: "Dra. Leticia Spiller", crm: "CRM-55667-PR", especialidade: "Dermatologista", local: "Hospital Iguaçu", convenios: "Cassi, Bradesco, Unimed" },
  { id: 7, nome: "Dr. Ricardo Arona", crm: "CRM-77889-PR", especialidade: "Pneumologista", local: "Clínica Pulmonar", convenios: "Todas as Redes" },
  { id: 8, nome: "Dra. Sandra Rosa", crm: "CRM-99001-PR", especialidade: "Pneumologista", local: "Hospital da Respiração", convenios: "Unimed, Particular" },
  { id: 9, nome: "Dr. Marlus Machado", crm: "CRM-11916-PR", especialidade: "Pneumologista", local: "Hospital Iguaçu", convenios: "Sulamérica, Unimed, Particular" },
  { id: 10, nome: "Dr. Rodrigo Minotauro", crm: "CRM-22334-PR", especialidade: "Ortopedista", local: "Instituto de Fraturas", convenios: "Unimed, Amil, Sanepar" },
  { id: 11, nome: "Dra. Amanda Ribas", crm: "CRM-44556-PR", especialidade: "Ortopedista", local: "Hospital do Esporte", convenios: "Cassi, Particular, Bradesco" },
  { id: 12, nome: "Dr. Anderson Silva", crm: "CRM-66778-PR", especialidade: "Ortopedista", local: "Clínica Articular", convenios: "Unimed, Bradesco, Particular" },
  { id: 13, nome: "Dr. Charles Xavier", crm: "CRM-88990-PR", especialidade: "Neurologista", local: "Centro de Neurociência", convenios: "Todas as Redes" },
  { id: 14, nome: "Dra. Jean Grey", crm: "CRM-10112-PR", especialidade: "Neurologista", local: "Hospital Iguaçu", convenios: "Unimed, Amil, Particular" },
  { id: 15, nome: "Dr. Stephen Strange", crm: "CRM-13141-PR", especialidade: "Neurologista", local: "Clínica Sanctum", convenios: "Particular, Sulamérica" }
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


app.get("/medicos", verificarToken, (req, res) => {
  res.json(medicos);
});


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});


