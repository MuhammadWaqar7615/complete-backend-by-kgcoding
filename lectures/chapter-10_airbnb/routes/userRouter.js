const express = require('express');
const path = require('path')
const userRouter = express.Router();
const rootDir = require('../utils/pathutils');

userRouter.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'home.html'));
});

module.exports = userRouter;