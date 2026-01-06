const express = require("express");
const { generateToken } = require("../utils/generateJWT");

const router = express.Router();

// Route to generate a JWT
router.get("/token", (req, res) => {
  const token = generateToken();
  res.json({ token });
});

module.exports = router;
