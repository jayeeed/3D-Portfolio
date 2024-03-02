const express = require("express");
const router = express.Router();

const {
  trainBotController,
  getAnswerController,
} = require("../controllers/chatController");

const cors = require("cors");
router.use(cors());

router.get("/train", trainBotController);

router.post("/chat", getAnswerController);

module.exports = router;
