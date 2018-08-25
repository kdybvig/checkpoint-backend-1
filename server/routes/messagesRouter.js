const express = require("express");
const messagesRouter = express.Router();
const {list, create} = require('../controllers/messagesController');

const bodyParser = require("body-parser");
messagesRouter.use(bodyParser.json());

messagesRouter.get('/', list);
messagesRouter.post('/', create);

module.exports = messagesRouter;