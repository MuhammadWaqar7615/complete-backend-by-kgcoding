const express = require('express');
const app = express();
const PORT = 3001;

// 1. completed

// 2. completed
app.use((req, res, next) => {
    console.log(" ");
    console.log("request path: ", req.path);
    // res.send("<h1>this is home page</h1>");
    next();
})
app.use((req, res, next) => {
    // res.send('<h1>This is Products page</h1>')
    console.log('request method: ', req.method);
    next();
})


// 3. 
// app.use((req, res, next) => {
//     console.log(" ");
//     return res.send('<h1>This should be home page</h1>')
// })

// 4,
app.get('/', (req, res, next) => {
    res.send(`<h1>This is Home page</h1>`);
    next();
})
// app.get('/contact-us', (req, res) => {
//     res.send(`<h1>Please give your details</h1>`)
// })

// 5.
app.get('/contact-us', (req, res) => {
    res.send(`
        <h1>Please give your details</h1>
        <form action="/contact-us" method='POST'>
        <input type="text" name='name' placeholder='Enter your name' /> <br />
        <input type="email" name='email' placeholder='Enter your email' /> <br />
        <button type="submit">Submit</button>
        </form>    
    `)
})

// 6. 
app.post('/contact-us', (req, res) => {
    res.send("<h1>Thank you for submitting the form, we will contact with your shortly</h1>")
})

app.listen(PORT, () => {
    console.log("The server is listening at the port: ", PORT);
})