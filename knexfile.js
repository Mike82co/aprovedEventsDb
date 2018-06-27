// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/gigify2.0'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
