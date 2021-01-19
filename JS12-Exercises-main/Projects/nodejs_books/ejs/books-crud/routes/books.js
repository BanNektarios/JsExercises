var express = require('express');
var router = express.Router();
var dbConnection = require('../lib/db')

/* GET books page. */
router.get('/', function (req, res, next) {
    const query = "SELECT * FROM books"
    dbConnection.query(query, (err, rows) => {
        if (err) {
            res.render('books', { title: 'Books - ERROR', books: 'Something seems wrong with your code' })
        } else {
            res.render('books', { title: 'Books', books: rows })

        }
    })
    // res.render('books', { title: 'Books', books: 'Books-DB' });
});

module.exports = router;
