const { medicos } = require("../database/medicos");
const ModelMedico = {
    listar: () => medicos,
    buscar: (id) => medicos.find(m => m.id === parseInt(id)),
    criar: (d) => { const n = { id: Date.now(), ...d }; medicos.push(n); return n; },
    editar: (id, d) => { 
        const i = medicos.findIndex(m => m.id === parseInt(id));
        if (i === -1) return null;
        medicos[i] = { ...medicos[i], ...d }; return medicos[i];
    },
    excluir: (id) => {
        const i = medicos.findIndex(m => m.id === parseInt(id));
        return i !== -1 ? medicos.splice(i, 1) : null;
    }
};
module.exports = { ModelMedico };