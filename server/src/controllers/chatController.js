const axios = require("axios");
require("dotenv").config();

async function getOllamaController(req, res) {
  try {
    // Forward the request to the provided endpoint
    const response = await axios.post(process.env.CHAT_AP, req.body);
    // Send the response received from the endpoint back to the client
    res.json(response.data);
  } catch (error) {
    // Handle errors
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  getOllamaController,
};
