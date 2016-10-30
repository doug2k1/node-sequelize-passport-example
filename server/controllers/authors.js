const { Author, Book } = require('../models')

module.exports = {
  index (req, res) {
    Author
      .findAll({ include: Book })
      .then(authors => { res.status(200).json(authors) })
      .catch(error => { res.status(500).json(error) })
  },

  show (req, res) {
    Author
      .findById(req.params.id, { include: Book })
      .then(author => { res.status(200).json(author) })
      .catch(error => { res.status(500).json(error) })
  },

  create (req, res) {
    Author
      .create(req.body)
      .then(newRecord => { res.status(200).json(newRecord) })
      .catch(error => { res.status(500).json(error) })
  },

  update (req, res) {
    Author
      .update(req.body, {
        where: {
          id: req.params.id
        }
      })
      .then(rowsUpdated => { res.status(200).json({ rowsUpdated: rowsUpdated[0] }) })
      .catch(error => { res.status(500).json(error) })
  },

  delete (req, res) {
    Author
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(rowsDeleted => { res.status(200).json({ rowsDeleted }) })
      .catch(error => { res.status(500).json(error) })
  }
}
