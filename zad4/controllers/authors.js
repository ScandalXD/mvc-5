const Author = require('../models/author');
const authors = [
    new Author(1, 'Author 1'),
    new Author(2, 'Author 2'),
    new Author(3, 'Author 3')
];

exports.getAuthors = (req, res) => {
    res.render('authors', { authors });
};