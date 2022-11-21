const env = process.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: env.DB_HOST || 'remotemysql.com',
    user: env.DB_USER || 'HxIJj8HVXY',
    password: env.DB_PASSWORD || 'FtkTYEG0k5',
    database: env.DB_NAME || 'HxIJj8HVXY',
    port: env.DB_PORT || '3306',
    waitForConnections: true,
    connectionLimit: env.DB_CONN_LIMIT || 2,
    queueLimit: 0,
    debug: env.DB_DEBUG || false
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;
