const express  = require('express');
const {createBooks,
    getAllBooks,
    BooksByid,
    DeleteBooks,
    updateBook} = require('../Controller/Book')

const routes = express.Router();

routes.post('/api/books/v1/create',createBooks)
routes.get('/api/books/v1/getAllBooks',getAllBooks)
routes.get('/api/books/v1/getBooks/:id',BooksByid)
routes.put('/api/books/v1/updateBook/:id',updateBook)
routes.delete('/api/books/v1/DeleteBooks/:id',DeleteBooks)



module.exports = {
    booksRoutes: routes
}