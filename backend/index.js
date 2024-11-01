const fs = require("fs/promises");
const bodyParser = require("body-parser")
const path = require("path");
const express = require("express");

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static('public'));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/meals", async (req, res) => {
  try{
    const filePath = path.join(__dirname,"data","meals.json");
    const data = await fs.readFile(filePath,'utf-8');
    const meals = JSON.parse(data);
    res.json(meals);
    console.log(meals);
  }
  catch(error){
    console.log("Error during reading meals JSON file: " + error);
    res.status(500).json({message: "Error during reading meals file."});
  }
  
});

app.use((req, res) => {
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  res.status(404).json({ message: "Not found" });
});

console.log("Listening on port 3001")
app.listen(3001);
