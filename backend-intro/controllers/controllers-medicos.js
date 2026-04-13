import { ModelMedico } from '../models/models-medicos.js';

export const getMedicos = (req, res) => {
  const lista = ModelMedico.listarTodos();
  res.status(200).json(lista);
};

export const postMedico = (req, res) => {
  const novo = ModelMedico.criar(req.body);
  res.status(201).json(novo);
};