const fs = require('fs');


fs.readFile("./lib/collectAnswers.js", (err, text)=>{
    if (err) {
        console.log(`There is an error: ${err.message}`);
        process.exit()
    }
    console.log("file contents read \n")
    console.log(text + "\n")
    console.log("finished")

})

console.log("begin")