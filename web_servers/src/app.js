const express = require("express");
const path = require("path");

const app = express();
console.log(__dirname);
console.log(path.join(__dirname, "../public"));
const filepath = path.join(__dirname, "../public");
app.use(express.static(filepath));

app.get("", (req, res) => {
  res.send("Hello Express");
});

app.get("/about", (req, res) => {
  res.send("<h1>We are the node js developer</h1>");
});

app.get("/Home", (req, res) => {
  res.send({ name: "Deepak", age: 25 });
});

app.listen(4000, (req, res) => {
  console.log("Server is up and running");
});
