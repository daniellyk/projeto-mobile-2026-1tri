const db = require('../database/db');

const PacienteModel = {
  listarTodos: () => {
    return db.pacientes;
  },

  buscarPorId: (id) => {
    return db.pacientes.find(p => p.id === parseInt(id));
  },

  criar: (novoPaciente) => {
    const id = db.pacientes.length + 1;
    const pacienteComId = { id, ...novoPaciente };
    db.pacientes.push(pacienteComId);
    return pacienteComId;
  }
};

module.exports = PacienteModel;