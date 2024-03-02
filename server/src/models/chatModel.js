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
    const promptTemplate = `Use the following pieces of context to answer the question at the end. If you don't know the answer, just say that you don't know, don't try to make up an answer. Try to answer as short as you can and answer in bullet points if relevant.

    {context}
    
    Example Question:What's your name?
    Example Answer:My name is Jayed Bin Jahangir.

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
