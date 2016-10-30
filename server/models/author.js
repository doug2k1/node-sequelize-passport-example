module.exports = function (sequelize, DataTypes) {
  var Author = sequelize.define('Author', {
    name: { type: DataTypes.STRING, allowNull: false },
    bio: DataTypes.TEXT
  }, {
    underscored: true,
    classMethods: {
      associate: function (models) {
        Author.hasMany(models.Book, {
          onDelete: 'cascade'
        })
      }
    }
  })
  return Author
}
