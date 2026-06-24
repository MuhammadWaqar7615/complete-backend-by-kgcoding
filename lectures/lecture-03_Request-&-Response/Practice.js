const http = require("http");
const PORT = 3001;
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    console.log("/ url triggered");
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html>
        <head><title>Form writing</title></head>
        <body>
        <h1>This is Home Page</h1>
        <ul>
        <li><a href="/">Home Page</a></li>
        <li><a href="/men">men Page</a></li>
        <li><a href="/women">women Page</a></li>
        <li><a href="/kids">kids Page</a></li>
        <li><a href="/cart">cart Page</a></li>
        </ul>
        </body>
        </html>
        `);
    return res.end();
  } else if(req.url === "/home") {
    console.log("/women url triggered");
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html>
        <head><title>Form writing</title></head>
        <body>
            <h1>Home Page</h1>
        </body>
        </html>    
    `);
    return res.end();
  } else if (req.url === "/men") {
    console.log("/men url triggered");
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html>
        <head><title>Form writing</title></head>
        <body>
            <h1>Men Page</h1>
        </body>
        </html>    
    `);
    return res.end();
  } else if (req.url === "/women") {
    console.log("/women url triggered");
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html>
        <head><title>Form writing</title></head>
        <body>
            <h1>Women Page</h1>
        </body>
        </html>    
    `);
    return res.end();
  } else if (req.url === "/kids") {
    console.log("/kids url triggered");
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html>
        <head><title>Form writing</title></head>
        <body>
            <h1>Kids Page</h1>
        </body>
        </html>    
    `);
    return res.end();
  } else if (req.url === "/cart") {
    console.log("/cart url triggered");
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html>
        <head><title>Form writing</title></head>
        <body>
            <h1>Cart Page</h1>
        </body>
        </html>    
    `);
    return res.end();
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html>
        <head><title>Form writing</title></head>
        <body>
            <h1>Error 404 Page not found</h1>
        </body>
        </html>    
    `);
    return res.end();
  }
});
server.listen(PORT, () => {
  console.log("listening at port: ", PORT);
});
