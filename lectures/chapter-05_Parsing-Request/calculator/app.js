const requestHandler = require('./requestHandler');
const http = require('http');
const PORT = 3001;
const server = http.createServer(requestHandler);
server.listen(PORT, () => {
    console.log("The server is listening at the port: ", PORT);
})