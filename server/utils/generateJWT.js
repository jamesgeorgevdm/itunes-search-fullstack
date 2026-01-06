const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.SECRET_KEY;

// Generate a JWT token using the secret key
const generateToken = () => jwt.sign({}, SECRET_KEY, { expiresIn: "1h" });

module.exports = { generateToken, SECRET_KEY };
