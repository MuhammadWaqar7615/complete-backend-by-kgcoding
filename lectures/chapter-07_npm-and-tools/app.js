const http = require('http');
const PORT = 3001;
const server = http.createServer((res, req) => {
    console.log(req.method);
}).listen(PORT, () => {console.log("Server listening at the port: ", PORT)})