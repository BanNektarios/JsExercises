const fs = require('fs');

const writeStream = fs.createWriteStream("./storage/myFile.txt", "UTF-8");
const readStream = fs.createReadStream("./files_streams/lorem.md", "utf-8");

readStream.pipe(writeStream)