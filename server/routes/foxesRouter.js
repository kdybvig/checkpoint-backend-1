const express = require("express");
const foxesRouter = express.Router();
const fetch = require('node-fetch');

foxesRouter.get('/', (req, res) => {
    fetch(`https://randomfox.ca/floof/`, 
    { 
    method: 'GET', 
    headers: {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36"
    }
    })
    .then(response => response.json())
    .then(json => {
        res.json(json.image);
    });
})

module.exports = foxesRouter;