const express = require("express");
const path = require("path");
const router = require("./routes/route");
const users = require("./models/users");

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});