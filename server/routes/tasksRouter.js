const express = require("express");
const tasksRouter = express.Router();
const {list, create} = require('../controllers/tasksController'); 

const bodyParser = require("body-parser");
tasksRouter.use(bodyParser.json());

tasksRouter.get('/', list);
tasksRouter.post('/', create);

module.exports = tasksRouter;