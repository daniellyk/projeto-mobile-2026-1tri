const express = require('express');
const bodyParser = require('body-parser');

// Import routes
const patientsRoutes = require('./routes/pacientes');
const doctorsRoutes = require('./routes/medicos');
const appointmentsRoutes = require('./routes/agendamentos');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/patients', patientsRoutes);
app.use('/doctors', doctorsRoutes);
app.use('/appointments', appointmentsRoutes);
app.use('/auth', authRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
