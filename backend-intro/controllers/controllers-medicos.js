const { ModelMedico } = require("../models/models-medicos");
exports.listar = (req, res) => res.json(ModelMedico.listar());
exports.buscar = (req, res) => res.json(ModelMedico.buscar(req.params.id));
exports.criar = (req, res) => res.status(201).json(ModelMedico.criar(req.body));
exports.editar = (req, res) => res.json(ModelMedico.editar(req.params.id, req.body));
exports.excluir = (req, res) => res.json(ModelMedico.excluir(req.params.id));