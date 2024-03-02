const fs = require("fs");
const path = require("path");

const { OpenAI, OpenAIEmbeddings } = require("@langchain/openai");
const { RecursiveCharacterTextSplitter } = require("langchain/text_splitter");
const { RetrievalQAChain, loadQARefineChain } = require("langchain/chains");
const { HNSWLib } = require("@langchain/community/vectorstores/hnswlib");

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
      combineDocumentsChain: loadQARefineChain(model),
      retriever: vectorStore.asRetriever((search_kwargs = { k: 1 })),
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

    let outputText = followUpRes.output_text;

    // Strip "Based on the context information provided," and everything before it
    const contextInfoIndex = outputText.indexOf(
      "Based on the context information provided,"
    );
    if (contextInfoIndex !== -1) {
      outputText = outputText.substring(
        contextInfoIndex + "Based on the context information provided, ".length
      );
    }

    // Strip any leading newline characters
    outputText = outputText.trimStart();

    // Now, strip everything before the first newline character in the remaining output text
    outputText = outputText.substring(outputText.indexOf("\n") + 1);

    return outputText;
  } catch (error) {
    console.error(error);
    throw new Error("Internal Server Error");
  }
}

module.exports = { trainBot, getAnswer };
