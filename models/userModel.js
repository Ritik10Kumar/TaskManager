// models/userModel.js
const pool = require("../config/database");

const User = {
  create: async (username, password) => {
    return pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [
      username,
      password,
    ]);
  },
  findByUsername: async (username) => {
    const result = await pool.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );
    return result.rows[0];
  },
};

module.exports = User;
