require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const PORT = 3000;
const app = express();
const taskRoute = require('./routers/taskrouter');
const promBundle = require('express-prom-bundle');

const metricsMiddleware = promBundle({ includeMethod: true });
app.use(metricsMiddleware)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', taskRoute);
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Conectado ao MongoDB');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB', err);
  });

app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`);
    next();
});

app.listen(PORT, () => {
    console.log(`Servidor na porta: ${PORT}`);
});

app.get('/metrics', (req, res) => {
    res.redirect('/metrics');
});

app.get('/health', (req, res) => {
    res.status(200).send({ status: 'UP' });
  });