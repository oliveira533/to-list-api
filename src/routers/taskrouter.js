const express = require('express');
const taskController = require('../controllers/taskcontroller');

const taskRoute = express.Router();

taskRoute.get('/list', taskController.list);
taskRoute.post('/add', taskController.add);
taskRoute.delete('/delete', taskController.delete);
taskRoute.patch('/complete', taskController.complete);
taskRoute.put('/alter', taskController.alter);

module.exports = taskRoute;