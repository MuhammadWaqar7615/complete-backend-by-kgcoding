const express = require('express');
const PORT = 3001;

const app = express();

app.use("/", (req, res, next) => {
    console.log("This is first middleware");
    next();
});

app.use("/products", (req, res, next) => {
    console.log("This is second middleware");
    res.send("<p>Welcome to products page</p>");
});

app.use("/", (req, res) => {
    console.log("This is third middleware");
    res.send("<p>Welcome to home page</p>");
});

app.listen(PORT, () => {
    console.log("server is listening at port:", PORT);
});