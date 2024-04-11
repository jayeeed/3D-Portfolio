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
  temperature: 0.1,
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
    `You are a math assistant. User question: {question}. Return only the answer nothing else.
    Chat History:
    {chat_history}
    Follow Up question: {question}
    Standalone question:`
  ),
});

app.use(express.json());

// Define a route to handle incoming POST requests
app.post("/chat", async (req, res) => {
  try {
    const { question } = req.body;
    if (!question) {
      return res.status(400).json({ error: "question is required" });
    }

    const result = await chain.invoke({ question });

    return res.json({
      answer: result.response,
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// Start the Express server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
