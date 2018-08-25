const Message = require('../models/message');

module.exports.list = (req, res) => {
    Message.find({}, (err, messages) => {
        if (err) res.send(err);
        res.json(messages);
    });   
}

module.exports.create = (req, res) => {
    const newMessage = Message(req.body);
    newMessage.save();
    res.json(newMessage);
}