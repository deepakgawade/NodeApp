const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("Hello Express");
});

app.get("/about", (req, res) => {
  res.send("<h1>We are the node js developer</h1>");
});

app.get("/Home", (req, res) => {
  res.send({ name: "Deepak", age: 25 });
});

app.listen(3000, (req, res) => {
  console.log("Server is up and running");
});
