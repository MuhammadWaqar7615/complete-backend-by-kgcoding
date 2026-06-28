const express = require('express');
const errorRouter = express.Router();
const path = require('path');

errorRouter.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '../', 'views', '404.html'));
})

module.exports = errorRouter;