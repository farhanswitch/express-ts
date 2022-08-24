require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: "secret",
    database: "ts",
    host: "mysql",
    dialect: "mysql",
  },
  // development: {
  //   username: process.env.DB_USER,
  //   password: process.env.DB_PASSWORD,
  //   database: process.env.DB_NAME,
  //   host: process.env.DB_HOST,
  //   dialect: "mysql",
  // },
  test: {
    username: "root",
    password: "secret",
    database: "ts",
    host: "mysql",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: "secret",
    database: "ts",
    host: "mysql",
    dialect: "mysql",
  },
};
