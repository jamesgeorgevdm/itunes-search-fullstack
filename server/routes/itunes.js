const express = require("express");
const axios = require("axios");
const verifyToken = require("../middleware/verifyToken");

const router = express.Router();
const BASE_URL = "https://itunes.apple.com/search";

// POST route to handle iTunes API search
router.post("/", verifyToken, async (req, res) => {
  const { term, media } = req.body;

  if (!term || !media) {
    return res
      .status(400)
      .json({ error: "Search term and media type are required" });
  }

  try {
    const response = await axios.get(BASE_URL, {
      params: { term, media, limit: 20 },
    });

    res.json(response.data.results);
  } catch (err) {
    console.error("Error fetching data from iTunes API:", err.message);
    res.status(500).json({ error: "Failed to fetch data from iTunes API" });
  }
});

module.exports = router;
