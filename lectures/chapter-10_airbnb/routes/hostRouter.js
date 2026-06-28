const express = require("express");
const hostRouter = express.Router();
const path = require('path');
const rootDir = require('../utils/pathutils');

hostRouter.get("/add-home", (req, res) => {
  console.log("body require: ", req.body);
  res.sendFile(path.join(rootDir, 'views', 'addHome.html'));
});

hostRouter.post("/add-home", (req, res) => {
  console.log("request body data: ", req.body);
  res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'));
});

module.exports = hostRouter;