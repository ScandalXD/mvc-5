const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

const homeRoutes = require('./routes/home');
app.use('/', homeRoutes);

const booksRoutes = require('./routes/books');
app.use('/book', booksRoutes);

const authorsRoutes = require('./routes/authors');
app.use('/author', authorsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});