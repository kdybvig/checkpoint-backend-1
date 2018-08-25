const Task = require('../models/task');

module.exports.list = (req, res) => {
    Task.find({}, (err, tasks) => {
        if (err) res.send(err);
        res.json(tasks);
    });   
}

module.exports.create = (req, res) => {
    const newTask = Task(req.body);
    newTask.save();
    res.json(newTask);
}