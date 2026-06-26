const http = require('http');
const errors  = require('./errors');
const PORT = 3001;
const server = http.createServer((req, res) => {
    console.log("req nethod", req.method);
    errors()

}).listen(PORT, () => {console.log('Server is listening at port: ', PORT)});