const http = require("http");

const server = http.createServer((req, res) => {
    console.log("Request: ", req);
})

const PORT = 3000
server.listen(PORT, () => {
    console.log(`server started at PORT: ${PORT}`);
})