const express = require("express");
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const errorRouter = require("./routes/errorRouter");
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  console.log("request url: ", req.url);
  console.log("request method: ", req.method);
  next();
});

app.use(express.urlencoded()); // express.urlencoded() basically gives the body (means the data which is been sent via form) in req.body

app.use(userRouter);

app.use('/host', hostRouter);

app.use(errorRouter);

app.listen(PORT, () => {
  console.log("The server is listening at port: ", PORT);
});
