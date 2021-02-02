const mysql2 = require('mysql2');

var connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'private_school',
    password: '1234',
    port: '3306'
})

connection.connect((error) => {
    if (error) {
        console.log("");
    } else {
        console.log("CONNECTED to DATABASE");
    }
});

let query = connection.query("SELECT * FROM `private_school`.`students`;")


module.exports = {
    
    exits: {
        success: {
            viewTemplatePath: 'books',
        }
    },

    fn: async function (err,rows) {

        // Respond with view.
        return {
            students: query
        };

    }
}