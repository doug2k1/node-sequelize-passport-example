const Book = require('../models/').Book

module.exports = {
  index (req, res) {
    Book
      .findAll()
      .then(books => { res.status(200).json(books) })
      .then(error => { res.status(500).json(error) })
  },

  show (req, res) {
    Book
      .findById(req.params.id)
      .then(book => { res.status(200).json(book) })
      .then(error => { res.status(500).json(error) })
  },

  create (req, res) {
    Book
      .create(req.body)
      .then(newRecord => { res.status(200).json(newRecord) })
      .catch(error => { res.status(500).json(error) })
  },

  update (req, res) {
    Book
      .update(req.body, {
        where: {
          id: req.params.id
        }
      })
      .then(rowsUpdated => { res.status(200).json({ rowsUpdated: rowsUpdated[0] }) })
      .catch(error => { res.status(500).json(error) })
  },

  delete (req, res) {
    Book
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(rowsDeleted => { res.status(200).json({ rowsDeleted }) })
      .catch(error => { res.status(500).json(error) })
  }
}
