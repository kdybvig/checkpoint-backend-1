const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    date: {
        required: true,
        type: String
    },
    task: {
        required: true,
        type: String
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;