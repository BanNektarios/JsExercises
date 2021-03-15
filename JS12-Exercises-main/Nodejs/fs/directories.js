const fs = require('fs');

fs.readdirSync("./storage").forEach(filename => {
    fs.unlinkSync(`./storage/${filename}`)
})

fs.rmdir("./storage", err => {
    if (err) {
        throw err;
    }
    console.log("./storage directory removed");
});