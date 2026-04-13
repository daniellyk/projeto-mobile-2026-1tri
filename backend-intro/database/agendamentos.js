// models/models-agendamentos.js

const dbAgendamentos = require('../database/agendamentos');

const listarTodos = () => {
    return dbAgendamentos;
};

// Exemplo de função para buscar por ID
const buscarPorId = (id) => {
    return dbAgendamentos.find(agendamento => agendamento.id === parseInt(id));
};

module.exports = {
    listarTodos,
    buscarPorId
};