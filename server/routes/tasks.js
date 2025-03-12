const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// 1️ Add a new task
router.post('/tasks', async (req, res) => {
    try {
        const { title, description } = req.body;
        const newTask = new Task({ title, description });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 2️ Get all tasks
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 3️ Update a task (Mark as complete/incomplete)
router.put('/tasks/:id', async (req, res) => {
    try {
        const { completed } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            { completed, completedAt: completed ? new Date() : null },
            { new: true }
        );
        res.json(updatedTask);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 4️ Delete a task
router.delete('/tasks/:id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: "Task deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 5 Adding date when created
router.post("/", async (req, res) => {
    try {
        const newTask = new Task({
            title: req.body.title,
            createdAt: new Date()
        });
        const savedTask = await newTask.save();
        res.json(savedTask);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 6 Adding date when completed
router.put("/:id", async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            {
                title: req.body.title,
                completed: req.body.completed,
                completedAt: req.body.completed ? new Date() : null
            },
            { new: true }
        );
        res.json(updatedTask);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
  
module.exports = router;
