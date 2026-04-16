const { ModelAgendamento } = require("../models/models-agendamentos");
exports.listar = (req, res) => res.json(ModelAgendamento.listar());
exports.buscar = (req, res) => res.json(ModelAgendamento.buscar(req.params.id));
exports.criar = (req, res) => res.status(201).json(ModelAgendamento.criar(req.body));
exports.editar = (req, res) => res.json(ModelAgendamento.editar(req.params.id, req.body));
exports.excluir = (req, res) => res.json(ModelAgendamento.excluir(req.params.id));