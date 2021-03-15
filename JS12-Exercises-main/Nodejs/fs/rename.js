const fs = require('fs');

fs.renameSync("./colors.json", "./colorData.json")

fs.rename("./notes.md", "./storage-files/notes.md", err=>{
    if (err) {
        throw err;
    }
});

setTimeout(() => {
    fs.unlinkSync("./this.html")
}, 4000);