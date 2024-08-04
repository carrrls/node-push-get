const mongoose = require("mongoose");
const mongoUrl = "mongodb://localhost:27017/ayushSingh";
mongoose.connect(mongoUrl, {});
const db = mongoose.connection;
db.on("connected", () => {
  console.log("connected");
});
db.on("disconnected", () => {
  console.log("disconnected");
});
db.on("error", (err) => {
  console.log("error", err);
});
module.exports = db;
