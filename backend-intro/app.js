const express = require('express');
const rAuth = require('./routes/auth');
const rMedicos = require('./routes/medicos');
const rPacientes = require('./routes/pacientes');
const rAgendamentos = require('./routes/agendamentos');

const app = express();
app.use(express.json());

app.use("/", rAuth);
app.use("/medicos", rMedicos);
app.use("/pacientes", rPacientes);
app.use("/agendamentos", rAgendamentos);

app.listen(3000, () => console.log("Servidor Online"))