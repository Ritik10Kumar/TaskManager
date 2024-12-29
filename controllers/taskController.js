// controllers/taskController.js
const Task = require("../models/taskModel");

const taskController = {
  createTask: async (req, res) => {
    const { title, description, priority, due_date, category_id } = req.body;
    try {
      await Task.create(title, description, priority, due_date, category_id, req.userId);
      res.status(201).json({ message: "Task created successfully!" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getTasks: async (req, res) => {
    try {
      const tasks = await Task.findAllByUserId(req.userId);
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateTask: async (req, res) => {
    const { id } = req.params;
    const { title, description, priority, due_date, category_id } = req.body;
    try {
      await Task.update(id, title, description, priority, due_date, category_id, req.userId);
      res.json({ message: "Task updated successfully!" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteTask: async (req, res) => {
    const { id } = req.params;
    try {
      await Task.delete(id, req.userId);
      res.json({ message: "Task deleted successfully!" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = taskController;
