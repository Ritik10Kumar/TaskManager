// routes/taskRoutes.js
const express = require("express");
const taskController = require("../controllers/taskController");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "123Ritik@";

const router = express.Router();

const authenticate = (req, res, next) => {
  let token = req.headers["authorization"];
  token = token.split(" ")[1]
  if (!token) {
    return res.status(403).json({ error: "Access denied" });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.log(error)
    res.status(401).json({ error: "Invalid token" });
  }
};

router.post("/", authenticate, taskController.createTask);
router.get("/", authenticate, taskController.getTasks);
router.put("/:id", authenticate, taskController.updateTask);
router.delete("/:id", authenticate, taskController.deleteTask);

module.exports = router;
