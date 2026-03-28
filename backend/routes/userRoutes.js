const express = require("express");
const router = express.Router();
const User = require("../models/User");

// REGISTER API
router.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;