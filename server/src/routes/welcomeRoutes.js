const express = require("express");
const router = express.Router();

router.get("/", (res) => {
  res.send("Server running!! 🥳");
});

module.exports = router;
