const express = require("express");
const path = require("path");

const app = express();
console.log(__dirname);
console.log(path.join(__dirname, "../public"));
const filepath = path.join(__dirname, "../public");

app.set("view engine", "hbs");
app.use(express.static(filepath));

app.get("", (req, res) => {
  res.render("index", { title: "Mark the sun", author: "Dwayne Johnson" });
});

app.get("/about", (req, res) => {
  res.render("about", { company: "cosmos", author: "Dwayne Johnson" });
});

app.get("/help", (req, res) => {
  res.render("help", {
    name: "Dwayne Johnson",
    email: "dwaynejohnson@hotmail.com",
  });
});

app.listen(4000, (req, res) => {
  console.log("Server is up and running");
});
