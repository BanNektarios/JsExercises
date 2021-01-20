var express = require('express');
var subApp = express();

const app = require('../app');
const connection = require('../lib/db');
const { query } = require('../lib/db');
var router = express.Router();
var dbConnection = require('../lib/db')


subApp.use(express.urlencoded({ extended: true }))
/* GET books page. */
router.get('/list/:message?', function (req, res, next) {
    const query = "SELECT * FROM books"
    dbConnection.query(query, (err, rows) => {
        if (err) {
            res.render('books', { title: 'Books - ERROR', books: '', message: req.params.message })
        } else {
            res.render('books', { title: 'Books', books: rows, message: req.params.message })
        }
    });

    // res.render('books', { title: 'Books', books: 'Books-DB' });
});
router.get('/add/', (req, res, next) => {
    res.render('books_new', { title: 'Books - Add New', books: '', message: '' })
})

router.post('/add', function (req, res, next) {
    const { title, author } = req.body;
    const query = `INSERT INTO cb12ptjs.books (title, author) VALUES ('${title}', '${author}');`
    dbConnection.query(query, function (err, status) {
        // NOT OK - Error!!!
        if (err) {
            res.render("books_new", { title: 'Books- Add New', message: 'Error inserting data to the database' });
            //  All OK!!!
        } else {
            res.redirect("/books?message=OK!!!");
        }
    })
});

router.delete('/delete', (req, res, next) => {
    res.render()
})
module.exports = router;
