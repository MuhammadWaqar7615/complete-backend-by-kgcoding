const http = require('http');
const PORT = 3001;
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
        <html>
        <head>
        <title>Backend Practice</title>
        </head>
        
        <body>
        <h1>This is Home page</h1>
        </body>
        </html>
        `)
        return res.end();
    } else if (req.url === '/products') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>    
            <head><title>Backend Practice</title></head>    
            <body><h1>This is products page</h1></body>
            </html>    
        `)
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
        <head>
        <title>Backend Pracice</title>
        </head>
        
        <body>
        <h1>Error 404 page not found</h1>
        </body>
        </html>
        `)
    return res.end();
})
server.listen(PORT, () => {
    console.log('server started listening at port: ', PORT);
})