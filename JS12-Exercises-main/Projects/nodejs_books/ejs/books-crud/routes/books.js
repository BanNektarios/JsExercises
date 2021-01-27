var express = require('express');
const app = require('../app');
const connection = require('../lib/db');
const { query } = require('../lib/db');
var router = express.Router();
var dbConnection = require('../lib/db')
const Book = require('../models/book')


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

router.post('/add/', function (req, res, next) {
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

// router.post('/list/:id', function (req, res, next) {
//     const { id } = req.params;
//     const query = "DELETE FROM books where id=?"
//     dbConnection.query(query, id, function (err, res) {
//         console.log(id);
//         if (err) {
//             res.render('books', { title: "Something went Wrong" + err })
//         }
//         else { console.log(id) }
//     });
//     res.redirect(`/books/list/Deleted row with ID: ${id}`)
// });

// router.put('/list', (req, res, next) => {
//     let query = `UPDATE cb12ptjs.books SET title = '${title}', author = '${author}' WHERE (id = '${id}')`;

// });



// ==>  From class delete , update
// http://localhost:3000/books/delete/1 <---- we delete the record with id = 1
router.get('/delete/:id', function (req, res, next) {
    let bookId = req.params.id;
    let query = `DELETE FROM cb12ptjs.books WHERE id = ?`;
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    dbConnection.execute(query, [id], function (err, status, fields) {
        if (err) {

        } else {
            res.redirect("books/list")
        }
    });
});

// update
router.get('/edit/:id', function (req, res, next) {
    const { id } = req.params
    let book = {};
    const query = "SELECT * FROM `books` WHERE `id`=?";
    dbConnection.execute(query, [id], (err, result, fields) => {
        const book = new Book()
        result.render('books_new', { title: 'Books - Edit', message: '', book: book })
    });

})





module.exports = router;
