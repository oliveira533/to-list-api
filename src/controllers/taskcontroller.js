const Task = require('../models/taskmodel');

const taskController = {
  add: async (req, res) => {
    try {
      // Corrigir 'req.bod' para 'req.body'
      const newTask = new Task(req.body);
      const savedTask = await newTask.save();  // Aguardar o salvamento
      res.status(201).send(savedTask);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },
  list: async (req, res) => {
    try {
      // Aguardar o 'find'
      const tasks = await Task.find({});
      res.status(202).send(tasks);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },
  alter: async (req, res) => {
    try {
      const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!updatedTask) {
        return res.status(404).send("Tarefa não encontrada");
      }
      res.status(205).send(updatedTask);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const deletedTask = await Task.findByIdAndDelete(req.body.id);
      if (!deletedTask) {
        return res.status(404).send("Tarefa não localizada");
      }
      res.status(204).send();
    } catch (error) {
      res.status(501).send({ error: error.message });
    }
  },
  complete: async (req, res) => {
    try {
      const completedTask = await Task.findById(req.params.id);
      if (!completedTask) {
        return res.status(404).send({ error: 'Tarefa não localizada' });
      }
      completedTask.completed = true;
      const savedTask = await completedTask.save();
      res.status(202).send(savedTask);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }
}

module.exports = taskController;
