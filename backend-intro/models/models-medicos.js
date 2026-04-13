import { db } from './mock-database.js';

export const ModelMedico = {
  listarTodos: () => {
    return db.medicos;
  },
  buscarPorId: (id) => {
    return db.medicos.find(m => m.id === parseInt(id));
  },
  criar: (novoMedico) => {
    const id = db.medicos.length + 1;
    const medicoComId = { id, ...novoMedico };
    db.medicos.push(medicoComId);
    return medicoComId;
  }
};