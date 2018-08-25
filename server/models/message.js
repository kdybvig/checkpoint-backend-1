const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    date: {
        required: true,
        type: String
    },
    message: {
        required: true,
        type: String
    }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;