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
// app.use(cors());
// Add CORS middleware
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://jayeeed.netlify.app",
    "https://xy3d.vercel.app/"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

// routes
const emailRoutes = require("./src/routes/emailRoutes");
const welcomeRoutes = require("./src/routes/welcomeRoutes");
const chatRoute = require("./src/routes/chatRoute");

app.use(emailRoutes);
app.use(welcomeRoutes);
app.use(chatRoute);

// listener
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
