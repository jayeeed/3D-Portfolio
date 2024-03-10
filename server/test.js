const express = require("express");
const { ChatOpenAI } = require("@langchain/openai");
const { BufferMemory } = require("langchain/memory");
const { ConversationChain } = require("langchain/chains");
require("dotenv").config();
const { PromptTemplate } = require("@langchain/core/prompts");

const app = express();

const apikey = process.env.OPENAI_API_KEY;

const model = new ChatOpenAI({
  openAIApiKey: apikey,
  modelName: "gpt-3.5-turbo-0125",
  max_tokens: 1000,
  temperature: 0.1,
  top_k: 0,
  top_p: 0.95,
  frequency_penalty: 0,
  presence_penalty: 0,
});

const memory = new BufferMemory({
  memoryKey: "chat_history",
  initial_memory: { chat_history: "" },
});

const chain = new ConversationChain({
  llm: model,
  memory: memory,
  verbose: true,
  prompt: PromptTemplate.fromTemplate(
    `you are a math assistant. take the input {input} and return the answer.you are a math assistant.

    Chat History:
    {chat_history}
    Follow Up Input: {input}
    Standalone question:`
  ),
});

app.use(express.json());

// Define a route to handle incoming POST requests
app.post("/chat", async (req, res) => {
  try {
    const { input } = req.body;
    if (!input) {
      return res.status(400).json({ error: "Input is required" });
    }

    console.log("Memory object:", memory); // Log memory object

    const result = await chain.invoke({ input });
    return res.json({ answer: result.response });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
