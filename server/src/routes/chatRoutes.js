const express = require("express");
const router = express.Router();

const { getOllamaController } = require("../controllers/chatController");

router.post("/chat", getOllamaController);

module.exports = router;
