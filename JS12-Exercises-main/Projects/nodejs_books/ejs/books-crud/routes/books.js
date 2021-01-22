var express = require('express');
const app = require('../app');
const connection = require('../lib/db');
const { query } = require('../lib/db');
var router = express.Router();
var dbConnection = require('../lib/db')


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
            res.redirect("/books/list?message=OK!!!");
        }
    })
});

// router.delete('/list', function (req, res, next) {
//     const id = req.params.id;
//     console.log(id)
//     const query = `DELETE FROM cb12ptjs.books WHERE books.id ='${id}');`
//     dbConnection.query(query, function (err, status) {
//         // NOT OK - Error!!!
//         if (err) {
//             res.render("books", { title: 'Books - Add New', message: 'Error deleting data to the database' });
//             //  All OK!!!
//         } else {
//             res.redirect("/books/list");
//         }
//     })
// });

// router.get('/list/:id', (req, res, next) => {
//     const { id } = req.params
//     console.log(id)
//     const query = "SELECT * FROM books where id=?"
//     connection.query(query, id, (err, result) => {
//         if (err) {
//             res.render('books', { title: 'Books - ERROR', books: '', message: req.params.message })
//         } else {
//             res.render('books', { title: 'Books', books: result, id })
//         }
//     });
// })

router.post('/list/:id', function (req, res, next) {
    const { id } = req.params
    const query = "DELETE FROM books where id=?"
    dbConnection.query(query, id, function (err, res) {
        console.log(id)
        if (err) {
            res.render('books', { title: "Something went Wrong" + err })
        }
        else{console.log(id)}
    })
    res.redirect(`/books/list/Deleted row with ID: ${id}`)
})

module.exports = router;
