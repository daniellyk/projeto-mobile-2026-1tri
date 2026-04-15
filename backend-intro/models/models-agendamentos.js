const { agendamentos } = require("../database/agendamentos");
const ModelAgendamento = {
    listar: () => agendamentos,
    buscar: (id) => agendamentos.find(a => a.id === parseInt(id)),
    criar: (d) => { const n = { id: Date.now(), ...d }; agendamentos.push(n); return n; },
    editar: (id, d) => {
        const i = agendamentos.findIndex(a => a.id === parseInt(id));
        if (i === -1) return null;
        agendamentos[i] = { ...agendamentos[i], ...d }; return agendamentos[i];
    },
    excluir: (id) => {
        const i = agendamentos.findIndex(a => a.id === parseInt(id));
        return i !== -1 ? agendamentos.splice(i, 1) : null;
    }
};
module.exports = { ModelAgendamento };