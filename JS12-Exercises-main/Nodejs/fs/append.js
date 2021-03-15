const fs = require('fs');
const colorData = require('../colors.json');

colorData.colorList.forEach(color => {
    fs.appendFile('./storage-files/colors.md', `${color.color}: ${color.hex} \n`, err => {
        if (err) {
            throw err;
        }
   
    });
});