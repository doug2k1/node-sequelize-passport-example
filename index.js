const app = require('express')()
const bodyParser = require('body-parser')
const authors = require('./server/controllers/authors')
const books = require('./server/controllers/books')

app.use(bodyParser.json())

app.get('/authors', authors.index)
app.get('/authors/:id', authors.show)
app.post('/authors', authors.create)
app.put('/authors/:id', authors.update)
app.delete('/authors/:id', authors.delete)

app.get('/books', books.index)
app.get('/books/:id', books.show)
app.post('/books', books.create)
app.put('/books/:id', books.update)
app.delete('/books/:id', books.delete)

app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), () => {
  console.log(`Server listening on http://localhost:${app.get('port')}`)
})
