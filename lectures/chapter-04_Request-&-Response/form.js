const http = require("http");
const fs = require('fs/promises');
const PORT = 3001;
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html>
        <head><title>Form writing</title></head>
        <body>
            <h1>Home Page</h1>
            <form action="/form-detail" method="POST">
                <label for="username">User name:</label>
                <input type="text" id="username" name="username"><br>
                <span>Gender:</span>
                <label for="male">Male:</label>
                <input type="radio" id="male" name="gender" value="male" />
                <label for="female">Female:</label>
                <input type="radio" id="female" name="gender" value="female" /><br>
                <button type="Submit">Submit</button>
            </form>
        </body>
        </html>
    `);
    return res.end();
  } else if (req.url.toLowerCase() === "/form-detail" && req.method == "POST") {
    res.statusCode = 302;
    res.setHeader('location', '/');
    async function fileCreation() {
      await fs.writeFile('test.txt', 'hello')
    }
    fileCreation();
    res.end();
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html>
        <head><title>Form writing</title></head>
        <body>
            <h1>Error 404: Page not found</h1>
        </body>
        </html>
    `);
    return res.end();
  }
});
server.listen(PORT, () => {
  console.log("server is listeningi at port: ", PORT);
});
