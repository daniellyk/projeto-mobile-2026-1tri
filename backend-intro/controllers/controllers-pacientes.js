const patients = require('../models/models-pacientes');

exports.getAll = (req, res) => {
  res.json(patients);
};

exports.create = (req, res) => {
  const { name, age, email } = req.body;
  const newPatient = { id: patients.length + 1, name, age, email };
  patients.push(newPatient);
  res.status(201).json(newPatient);
};

exports.update = (req, res) => {
  const { id } = req.params;
  const patient = patients.find(p => p.id == id);
  if (!patient) return res.status(404).json({ error: 'Patient not found' });

  patient.name = req.body.name || patient.name;
  patient.age = req.body.age || patient.age;
  patient.email = req.body.email || patient.email;

  res.json(patient);
};

exports.delete = (req, res) => {
  const { id } = req.params;
  const index = patients.findIndex(p => p.id == id);
  if (index === -1) return res.status(404).json({ error: 'Patient not found' });

  patients.splice(index, 1);
  res.json({ message: 'Patient deleted successfully' });
};
