const fs = require('fs');

const md = `
#This is a new file

We can write text to a file with fa.writeFile

* fs.readdir
* fs.readFile
* fs.writeFile

`;

fs.writeFile("./notes.md", md.trim(), err => {
    
    if (err) {
        throw err;
    }
    console.log("file saved")
})