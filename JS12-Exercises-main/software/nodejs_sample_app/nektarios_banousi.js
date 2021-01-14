const mysql2 = require('mysql2');
const nodemon = require('nodemon');

var remote_dbhost = {

    host: "ra1.anystream.eu", // 127.0.0.1
    port: "5420",
    user: "cb12ptjs",
    password: "cb12ptjs",
    database: "cb12ptjs"
};

var connection = mysql2.createConnection(remote_dbhost);


const useDB = "USE cb12ptjs;";
let createTable = "create table nektarios_banousi (\
	`id` int not null auto_increment primary key,\
    `student_first` varchar(25) not null default 'John',\
    `student_last` varchar(25) not null default 'Doe',\
    `hobby` varchar(25)\
 );";

connection.connect((err) => {
    if (err) { console.log(err) }
    else {
        console.log("Connected to database!");
        connection.query(useDB, (ee, result) => {
            console.log(ee)
            console.log(result)
        });
        connection.query(createTable, (ee, result) => {
            console.log(ee)
            console.log(result)
        });
    } 
});


