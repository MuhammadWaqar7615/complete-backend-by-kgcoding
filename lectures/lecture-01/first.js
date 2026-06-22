const fs = require('fs');
fs.writeFile("output.txt", "This is output file", (err) => {
    if (err) console.log("error: ", err);
    else console.log("file written successfully");
})