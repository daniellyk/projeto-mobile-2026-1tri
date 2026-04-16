const { ModelPaciente } = require("../models/models-pacientes");
exports.listar = (req, res) => res.json(ModelPaciente.listar());
exports.buscar = (req, res) => res.json(ModelPaciente.buscar(req.params.id));
exports.criar = (req, res) => res.status(201).json(ModelPaciente.criar(req.body));
exports.editar = (req, res) => res.json(ModelPaciente.editar(req.params.id, req.body));
exports.excluir = (req, res) => res.json(ModelPaciente.excluir(req.params.id));