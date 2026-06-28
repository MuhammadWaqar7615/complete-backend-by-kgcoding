const express = require('express');
const errorRouter = express.Router();
const path = require('path');
const rootDir = require('../utils/pathutils');

errorRouter.use((req, res) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})

module.exports = errorRouter;