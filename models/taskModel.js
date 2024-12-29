// models/taskModel.js
const pool = require("../config/database");

const Task = {
  create: async (title, description, priority, due_date, category_id, user_id) => {
    return pool.query(
      "INSERT INTO tasks (title, description, priority, due_date, category_id, user_id) VALUES ($1, $2, $3, $4, $5, $6)",
      [title, description, priority, due_date, category_id, user_id]
    );
  },
  findAllByUserId: async (user_id) => {
    const result = await pool.query(
      "SELECT * FROM tasks WHERE user_id = $1",
      [user_id]
    );
    return result.rows;
  },
  update: async (id, title, description, priority, due_date, category_id, user_id) => {
    return pool.query(
      "UPDATE tasks SET title = $1, description = $2, priority = $3, due_date = $4, category_id = $5 WHERE id = $6 AND user_id = $7",
      [title, description, priority, due_date, category_id, id, user_id]
    );
  },
  delete: async (id, user_id) => {
    return pool.query("DELETE FROM tasks WHERE id = $1 AND user_id = $2", [
      id,
      user_id,
    ]);
  },
};

module.exports = Task;
