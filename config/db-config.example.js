
module.exports = {
  development: {
    url: 'postgres://user:password@localhost:5432/bookmark',
    dialect: 'postgres'
  },
  test: {
    url: process.env.DATABASE_URL || 'postgres://user:password@localhost:5432/bookmark',
    dialect: 'postgres'
  },
  staging: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres'
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres'
  }
}
