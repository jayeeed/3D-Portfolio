const { trainBot, getAnswer } = require("../models/chatModel");

async function trainBotController(req, res) {
  try {
    const vectorStore = await trainBot();
    return res.status(200).json({ message: vectorStore });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getAnswerController(req, res) {
  const { question } = req.body;

  try {
    const answer = await getAnswer(question);
    return res.status(200).json({ answer });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = { trainBotController, getAnswerController };
