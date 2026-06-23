const http = require('http');
const PORT = 3001;
const server = http.createServer((req, res) => {
    console.log("server created");
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
        <head>
        <title>This is server page</title>
        </head>
        
        <body>
        <h1>This is sent by server</h1>
        </body>
        </html>
        `)
    res.end()
})
server.listen(PORT, () => {
    console.log('server started listening at port: ', PORT);
})