const mysql2 = require('mysql2');
const http = require('http');


// how to connect to a DB and show on console / web page

var local_dbhost = {
    host: "localhost", //127.0.0.1
    port: "3306",
    user: "root",
    password: "1234",
    database: "cb12ptjs"
};

var remote_dbhost = {

    host: "ra1.anystream.eu", // 127.0.0.1
    port: "5420",
    user: "cb12ptjs",
    password: "cb12ptjs",
    database: "cb12ptjs"
};

var sql = "SELECT * FROM `cb12ptjs`.`users`;";
var sql2 = "SELECT * FROM `cb12ptjs`.`customers`;";
var addStudent = "INSERT INTO `cb12ptjs`.`students` (`student_first`, `student_last`, `hobby`) VALUES ('Nektarios', 'Banousi', 'Motorbikes');";

// Make a connection to the database server
// var connection = mysql2.createConnection(local_dbhost);
var connection = mysql2.createConnection(remote_dbhost);

let userResult;
connection.connect((err) => {
    if (err) { console.log(err) }
    else {
        console.log("Connected to database!");
        connection.query(sql2, (ee, result, fields) => {
            //1st Way
            // console.log(`result is:`)
            // console.log(result)
            // all records selective fields
            // Object.keys(result).forEach(function(key){
            //     var row = result[key]
            //     console.log(row.firstName)
            //     console.log(row.lastName)
            //     console.log(row.telephone)

            // })

            /* 
                http://localhost:8000
                Id: .....
                First Name: .....
                Last Name: .....
                Telephone: .....
            */

            userResult = Object.assign({}, result[0]);
            // console.log(userResult);
            var server = http.createServer(function (req, res) {
                /*
                    1nd Way --> Ισως αμα πετυχαινει τα cases να βαζει τα σωστα properties και να μην
                    βαζει τυφλα τα στις θεσεις [χ] σε αλλες τιμες
                */
                res.writeHead(404, {});
                switch (true){
                    case Object.keys(userResult)[0] == 'id': res.write(`ID: ${Object.values(userResult)[0].toString()} \n`);
                    case Object.keys(userResult)[1] == 'firstname': res.write(`First Name: ${Object.values(userResult)[1].toString()} \n`);
                    case Object.keys(userResult)[2] == 'lastname': res.write(`Last Name: ${Object.values(userResult)[2].toString()} \n`);
                    case Object.keys(userResult)[3] == 'telephone': res.write(`Telephone: ${Object.values(userResult)[4].toString()} \n`);
                }

                    // 2nd way --> Ειναι πολυ hard-coded και δεν με τρελενει, εξου και η απο πανω λυση
                // res.write("You did make it!\n");
                // res.write(`ID: ${Object.values(userResult)[0].toString()} \n`);
                // res.write(`First Name: ${Object.values(userResult)[1].toString()} \n`);
                // res.write(`Last Name: ${Object.values(userResult)[2].toString()} \n`);
                // res.write(`Telephone: ${Object.values(userResult)[4].toString()} \n`);
                res.end("");
            }).listen(8000);

        });
    }

});

for (const [key,value] in userResult) {
    if (Object.hasOwnProperty.call(userResult, [key,value])) {
        const result1 = userResult[[key,value]];
        console.log(result1)
    }
}