require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const itunesRoutes = require("./routes/itunes");
const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/itunes", itunesRoutes);
app.use("/api/auth", authRoutes);

// Serve React in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
