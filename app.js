const person = require("./models/person");
const express = require("express");
const app = express();
const db = require("./db");
// using bodyparser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.get("/", function (req, res) {
  res.send("hello aayush kaisa hai gandu");
});
// get request
// sending post request

app.post("/person", async (req, res) => {
  try {
    const data = req.body;
    // body and req is predefined;
    const newPerson = new person(data);
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

// host vala
app.listen(3000, () => {
  console.log("connected to 3000");
});
