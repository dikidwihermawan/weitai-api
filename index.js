const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const colorWindowRoutes = require("./src/routes/colorwindow");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/v1/colorwindow", colorWindowRoutes);

app.listen(4000, () => {
  console.log(`Server listen on port ${4000}`);
});

mongoose
  .connect(
    "mongodb+srv://weitai-data-center:a837829318@cluster0.d2orn1j.mongodb.net/weitai_data_center?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Server connected! ");
  })
  .catch((err) => console.log(err));
