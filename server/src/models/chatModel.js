const fs = require("fs");
const path = require("path");

const { OpenAI, OpenAIEmbeddings } = require("@langchain/openai");
const { RecursiveCharacterTextSplitter } = require("langchain/text_splitter");
const { RetrievalQAChain, loadQAStuffChain } = require("langchain/chains");
const { HNSWLib } = require("@langchain/community/vectorstores/hnswlib");
const { PromptTemplate } = require("@langchain/core/prompts");

const apikey = process.env.OPENAI_API_KEY;

const trainingTextPath = path.join(__dirname, "../../assets/data/training.txt");
const vectorStorePath = path.join(__dirname, "../../hnswlib");

async function trainBot() {
  try {
    const trainingText = fs.readFileSync(trainingTextPath, "utf-8");

    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
    });

    const docs = await textSplitter.createDocuments([trainingText]);

    const vectorStore = await HNSWLib.fromDocuments(
      docs,
      new OpenAIEmbeddings({
        openAIApiKey: apikey,
      })
    );

    if (!fs.existsSync(vectorStorePath)) {
      fs.mkdirSync(vectorStorePath);
    }

    vectorStore.save(vectorStorePath);
    console.log("Vector store saved to:", vectorStorePath);

    return vectorStore;
  } catch (error) {
    console.error(error);
    throw new Error("Internal Server Error");
  }
}

async function getAnswer(question) {
  try {
    const promptTemplate = `You are a helpful assistant which will respond in as it is Myself. If {question} contains "you" reply on behalf of me. If you don't know the answer, just say that you don't know, don't try to make up an answer, don't tell you're a Ai or bot or anything like that. Try to answer as short as you can and answer in bullet points if relevant.
    
    Example Question: "what is your name?"
    Example Answer: "আমার নাম জায়েদ বিন জাহাঙ্গীর।"

    Question:{question}
    Answer:`;

    const prompt = PromptTemplate.fromTemplate(promptTemplate);

    const vectorStore = await HNSWLib.load(
      vectorStorePath,
      new OpenAIEmbeddings({
        openAIApiKey: apikey,
      })
    );

    const model = new OpenAI({
      openAIApiKey: apikey,
      temperature: 0.1,
    });

    const chain = new RetrievalQAChain({
      combineDocumentsChain: loadQAStuffChain(model, { prompt }),
      retriever: vectorStore.asRetriever(),
    });

    const res = await chain.invoke({
      query: question,
      chat_history: "",
    });

    const chatHistory = `${question}\n${res.text}`;

    const followUpRes = await chain.invoke({
      query: question,
      chat_history: chatHistory,
    });

    return followUpRes.text;
  } catch (error) {
    console.error(error);
    throw new Error("Internal Server Error");
  }
}

module.exports = { trainBot, getAnswer };
