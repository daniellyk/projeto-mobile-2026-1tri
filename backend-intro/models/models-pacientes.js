const { pacientes } = require("../database/pacientes");

const ModelPaciente = {
    listar: () => pacientes,
    buscar: (id) => pacientes.find(p => p.id === parseInt(id)),
    criar: (d) => { const n = { id: Date.now(), ...d }; pacientes.push(n); return n; },
    editar: (id, d) => {
        const i = pacientes.findIndex(p => p.id === parseInt(id));
        if (i === -1) return null;
        pacientes[i] = { ...pacientes[i], ...d }; return pacientes[i];
    },
    excluir: (id) => {
        const i = pacientes.findIndex(p => p.id === parseInt(id));
        return i !== -1 ? pacientes.splice(i, 1) : null;
    }
};

module.exports = { ModelPaciente };