const express = require("express");
const app = express();
const fs = require('fs');
const tasksRouter = require('./routes/tasksRouter');
const ordersRouter = require('./routes/ordersRouter');
const messagesRouter = require('./routes/messagesRouter');
const foxesRouter = require('./routes/foxesRouter');

let data = [];

fs.readFile('./data.csv', 'utf8', function(err, contents) {
    console.log(contents);
    contents = contents.slice(contents.indexOf('\n') + 1);
    data = contents.split(',');
});

const mongoose = require("mongoose");
mongoose.promise = global.Promise;
mongoose.connect(`mongodb://kdybvig:checkpoint1@ds231242.mlab.com:31242/checkpoint1`);

app.listen(3001, err => {
    if(err) throw err;
    console.log('Server is listening on PORT 3001')
});

app.use('/tasks', tasksRouter);
app.use('/orders', ordersRouter);
app.use('/messages', messagesRouter);
app.use('/foxes', foxesRouter);

app.get('/newComments', (req, res) => {
    res.status(200).send(data[0])
});

app.get('/newTasks', (req, res) => {
    res.status(200).send(data[1]);
});

app.get('/newOrders', (req, res) => {
    res.status(200).send(data[2]);
});

app.get('/tickets', (req, res) => {
    res.status(200).send(data[3]);
});

app.get('/dateTime', (req, res) => {
    const curTime = new Date();
    res.status(200).send(curTime);
});