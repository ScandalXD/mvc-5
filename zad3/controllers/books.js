const Book = require('../models/book');
const books = [
    new Book(1, 'Book 1', 2000, 1),
    new Book(2, 'Book 2', 2005, 2),
    new Book(3, 'Book 3', 2010, 1)
];

exports.getBooks = (req, res) => {
    res.render('books', { books });
};