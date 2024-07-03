const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const mongoose = require('mongoose');

router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const task = new Task({
    title: req.body.title,
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a task
// Delete a task
router.delete('/:id', async (req, res) => {
  const taskId = req.params.id;
  console.log('Received delete request for ID:', taskId);  // Debugging line

  // Check if the ID is a valid MongoDB ObjectID
  if (!mongoose.Types.ObjectId.isValid(taskId)) {
    console.log('Invalid ID format');
    return res.status(400).json({ message: 'Invalid ID format' });
  }

  try {
    const task = await Task.findByIdAndDelete(taskId);
    if (!task) {
      console.log('Task not found');
      return res.status(404).json({ message: 'Task not found' });
    }

    console.log('Task deleted');
    res.json({ message: 'Task deleted' });
  } catch (err) {
    console.log('Error:', err.message);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
