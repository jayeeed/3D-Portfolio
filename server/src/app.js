// libs
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// app init
const app = express();
const port = process.env.PORT;

// middleware
app.use(bodyParser.json());

// cors
app.use(cors());

// routes
const emailRoutes = require("./routes/emailRoutes");
const welcomeRoutes = require("./routes/welcomeRoutes");
const chatRoute = require("./routes/chatRoutes");

app.use(emailRoutes);
app.use(welcomeRoutes);
app.use(chatRoute);

// listener
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
