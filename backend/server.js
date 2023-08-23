const express = require("express");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const mongoose = require("mongoose");
const Data = require("./DataSchema");

const app = express();

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("database connected");
  } catch (error) {
    console.log("unable to connect database");
    console.error(error);
  }
};

connectDB();

app.use(cors());
app.use(express.json());

app.post("/data", async (req, res) => {
  console.log(req.body);
  try {
    const data = await Data.create(req.body);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

app.get("/data", async (req, res) => {
  try {
    const data = await Data.find();
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

app.use("*", (req, res) => {
  console.log("someone is trying to access a non existing route", req.params);
  res.send("Route Not Found");
});
