const express = require('express');
const path = require('path')
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'home.html'));
});

module.exports = userRouter;