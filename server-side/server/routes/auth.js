const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });
    if (user) {
      res.status(200).json({ message: "Login successful (App2)", user });
    } else {
      res.status(401).json({ message: "Invalid credentials (App2)" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error logging in", error: err.message });
  }
});

module.exports = router;
