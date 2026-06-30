const express = require("express");
const router = require("./routes/route");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  console.log("Body:", req.body);
  next();
});

app.use(router);


app.listen(PORT, () => {
  console.log("server is listening at port: ", PORT);
});
