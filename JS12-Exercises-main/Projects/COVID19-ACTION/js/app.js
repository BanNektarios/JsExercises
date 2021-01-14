const express = require('express');
const nodemon = require('nodemon');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const app = express();

const db = mysql.createConnection({
    host: "localhost",
    // port: "3306",
    user: "root",
    password: "1234",
    database: "nodejs-login"
})

db.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("We are connected")
    }
})

app.get("/", (req, res) => {
    res.send("<h1>Landing Page</h1>")
})

const port = 5000
app.listen(port, () => {
    console.log(`Our server works in port ${port}`)
})