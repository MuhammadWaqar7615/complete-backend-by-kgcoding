const express = require("express");
const hostRouter = express.Router();
const path = require('path');

hostRouter.get("/add-home", (req, res) => {
  console.log("body require: ", req.body);
  res.sendFile(path.join(__dirname, '../', 'views', 'addHome.html'));
});

hostRouter.post("/add-home", (req, res) => {
  console.log("request body data: ", req.body);
  res.sendFile(path.join(__dirname, '../', 'views', 'homeAdded.html'));
});

module.exports = hostRouter;