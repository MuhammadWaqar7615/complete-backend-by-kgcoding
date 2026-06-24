const result = (req, res) => {
  const body = [];
  let userData = {};
  let num1 = null;
  let num2 = null;
  req.on("data", (chunk) => {
    console.log("chunk", chunk);
    body.push(chunk);
  });
  req.on("end", () => {
    const buffer = Buffer.concat(body);
    const data = buffer.toString();
    console.log("data: ", data);
    const params = new URLSearchParams(data);
    userData = Object.fromEntries(params);
    num1 = parseInt(userData.num1);
    num2 = parseInt(userData.num2);
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Calculator</title>
            </head>
            <body>
                <h1>Welcome to result Page</h1>
                <div>
                    Your Input numbers were: <span>${num1} and ${num2}</span>
                </div>
                <h2>result: <span>${num1 + num2}</span></h2>
                </body>
                </html>
                `);
    return res.end();
  });
};
module.exports = result;
