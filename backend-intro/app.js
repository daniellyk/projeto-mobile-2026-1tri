const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // para receber JSON no body

app.get('/', (req, res) => {
  res.json({ message: 'Servidor rodando -- olá, backend!' });
});

app.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}`);
});


app.use(express.json());
app.use(cors());
app.use(express.json());

// Dados simulando uma tabela de agendamentos médicos
let agendamentos = [
  { 
    id: 1, 
    paciente: "Carlos Oliveira", 
    medico: "Dr. Arnaldo Silva", 
    especialidade: "Cardiologia", 
    data: "2026-04-10", 
    hora: "09:00",
    status: "Confirmado"
  },
  { 
    id: 2, 
    paciente: "Mariana Costa", 
    medico: "Dra. Beatriz Souza", 
    especialidade: "Dermatologia", 
    data: "2026-04-10", 
    hora: "10:30",
    status: "Pendente"
  },
  { 
    id: 3, 
    paciente: "Roberto Santos", 
    medico: "Dr. Arnaldo Silva", 
    especialidade: "Cardiologia", 
    data: "2026-04-11", 
    hora: "14:00",
    status: "Confirmado"
  }
];

// Rota para listar todos os agendamentos (O que seu FlatList vai consumir)
app.get('/agendamentos', (req, res) => {
  res.json(agendamentos);
});

// Rota para filtrar agendamentos por médico (Ex: /agendamentos/medico/Arnaldo)
app.get('/agendamentos/medico/:nome', (req, res) => {
  const nomeMedico = req.params.nome.toLowerCase();
  const filtrados = agendamentos.filter(a => 
    a.medico.toLowerCase().includes(nomeMedico)
  );
  res.json(filtrados);
});

// Rota para criar novo agendamento vindo do App
app.post('/agendamentos', (req, res) => {
  const { paciente, medico, especialidade, data, hora } = req.body;

  if (!paciente || !medico || !data || !hora) {
    return res.status(400).json({ error: "Dados incompletos." });
  }

  const novo = {
    id: agendamentos.length + 1,
    paciente,
    medico,
    especialidade,
    data,
    hora,
    status: "Pendente"
  };

  agendamentos.push(novo);
  res.status(201).json(novo);
});

app.listen(PORT, () => {
  console.log(`API Médica rodando em http://localhost:${PORT}`);
});