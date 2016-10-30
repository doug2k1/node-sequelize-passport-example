module.exports = function (sequelize, DataTypes) {
  var Book = sequelize.define('Book', {
    name: { type: DataTypes.STRING, allowNull: false },
    isbn: { type: DataTypes.INTEGER, allowNull: false },
    publication_date: { type: DataTypes.DATE, allowNull: false },
    description: DataTypes.TEXT,
    author_id: { type: DataTypes.INTEGER, allowNull: false }
  }, {
    underscored: true,
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  })
  return Book
}
