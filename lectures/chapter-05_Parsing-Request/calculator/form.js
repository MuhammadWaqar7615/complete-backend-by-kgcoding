const form = (req, res) => {
    res.setHeader('Content-type', 'text/html');
    res.write(`
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Calculator</title>
            </head>
            <body>
                <h1>Welcome to addition Page</h1>
                <form action="/calculate-result" method="POST">
                    <label for="no1">Enter Number 1: </label>
                    <input type="number" name="num1" id="no1"> <br>
                    <label for="no2">Enter Number 2: </label>
                    <input type="number" name="num2" id="no2"> <br>
                    <button type="submit">Submit</button>
                </form>
            </body>
        </html>    
    `)
    return res.end();
}
module.exports = form; 