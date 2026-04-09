module.exports = [
    { id: 1, nome: 'Maria Silva', idade: 30, email: 'maria@email.com' }
  ];

  const express = require('express');
const router = express.Router();
const patientsController = require('../controllers/controllers-pacientes');
const authMiddleware = require('../utils/authmiddleware');

router.get('/', authMiddleware, patientsController.getAll);
router.post('/', authMiddleware, patientsController.create);
router.put('/:id', authMiddleware, patientsController.update);
router.delete('/:id', authMiddleware, patientsController.delete);

module.exports = router;
