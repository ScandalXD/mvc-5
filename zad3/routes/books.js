const express = require('express');
const router = express.Router();
const Book = require('../models/book');

let books = [
    new Book(1, 'Book 1', 2000, 1),
    new Book(2, 'Book 2', 2005, 2),
    new Book(3, 'Book 3', 2010, 1)
];

router.get('/list', (req, res) => {
    res.render('books', { books });
});

router.get('/add', (req, res) => {
    res.render('add-book');
});

router.post('/add', (req, res) => {
    const { title, publishingYear, authorId } = req.body;
    const newBook = new Book(books.length + 1, title, parseInt(publishingYear), parseInt(authorId));
    books.push(newBook);
    res.redirect('/book/list');
});

router.post('/delete/:id', (req, res) => {
    const id = parseInt(req.params.id);
    books = books.filter(book => book.id !== id);
    res.redirect('/book/list');
});

module.exports = router;