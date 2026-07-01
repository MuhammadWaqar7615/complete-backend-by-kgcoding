const express = require("express");
const path = require("path");
const router = require("./routes/route");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  console.log("Body:", req.body);
  next();
});

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});