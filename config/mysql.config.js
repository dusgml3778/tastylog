module.exports = {
  HOST:process.env.MYSQL_HOST || "127.0.0.1",
  PORT: process.env.MYSQL_PORT || "3306",
  USERNAME: process.env.MYSQL_USERNAME || "root",
  PASSWORD: process.env.MYSQL_PASSWORD || "root",
  DATABASE: process.env.MYSQL_DATABASE || "tastylog",
  CONNECTION_LIMIT: process.env.MYSQL_CONNECTION_LIMIT ? parseInt(process.env.MYSQL_CONNECTION_LIMIT) : 10,
  QUERY_LIMIT: process.env.MYSQL_CONNECTION_LIMIT ? parseInt(process.env.MYSQL_CONNECTION_LIMIT) : 0
};