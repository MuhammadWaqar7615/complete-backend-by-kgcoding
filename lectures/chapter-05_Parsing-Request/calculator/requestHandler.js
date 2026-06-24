const form = require('./form');
const result = require('./result')
const requestHandler = (req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Calculator</title>
            </head>
            <body>
                <h1>Welcome to Home Page</h1>
                <a href="/calculator">Go to Calculator</a>
            </body>
        </html>    
    `);
    return res.end();
  } else if (req.url === '/calculator') {
    form(req, res);
  } else if (req.url === '/calculate-result' && req.method == 'POST' ) {
    result(req, res);
  }
};

module.exports = requestHandler;