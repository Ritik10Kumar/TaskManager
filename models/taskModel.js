// models/taskModel.js
const pool = require("../config/database");

const Task = {
  create: async (title, description, priority, due_date, category_id,status, user_id,comment) => {
    return pool.query(
      "INSERT INTO tasks (title, description, priority, due_date, category_id, status,user_id,comment) VALUES ($1, $2, $3, $4, $5, $6,$7,$8)",
      [title, description, priority, due_date, category_id,status,user_id,comment]
    );
  },
  findAllByUserId: async (user_id) => {
    const result = await pool.query(
      "SELECT * FROM tasks WHERE user_id = $1",
      [user_id]
    );
    return result.rows;
  },
  update: async (id, title, description, priority, due_date, category_id, user_id,status,comment) => {
    return pool.query(
      "UPDATE tasks SET title = $1, description = $2, priority = $3, due_date = $4, category_id = $5 ,status = $8 ,comment = $9 WHERE id = $6 AND user_id = $7 RETURNING *",
      [title, description, priority, due_date, category_id, id, user_id,status,comment]
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
