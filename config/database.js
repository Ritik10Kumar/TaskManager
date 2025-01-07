// config/database.js
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres", // Replace with your PostgreSQL username
  host: "localhost",
  database: "taskmanager", // Replace with your database name
  password: "Admin@12345", // Replace with your PostgreSQL password
  port: 5432,
});

module.exports = pool;
