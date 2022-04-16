const express = require("express");
const path = require("path");

const hbs = require("hbs");

const app = express();
console.log(__dirname);

//Path config for express app
console.log(path.join(__dirname, "../public"));
const filepath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partial");

//location set for hbs
app.set("view engine", "hbs");
app.set("views", viewPath);
app.use(express.static(filepath));
hbs.registerPartials(partialPath);

//default route
app.get("", (req, res) => {
  res.render("index", { title: "Mark the sun", author: "Dwayne Johnson" });
});

//about route
app.get("/about", (req, res) => {
  res.render("about", { company: "cosmos", author: "Dwayne Johnson" });
});

//help route
app.get("/help", (req, res) => {
  res.render("help", {
    name: "Dwayne Johnson",
    email: "dwaynejohnson@hotmail.com",
  });
});

//route to handel errors
app.get("/help/*", (req, res) => {
  res.render("error", { errorText: "Help page not found" });
});

//route to handel errors
app.get("*", (req, res) => {
  res.render("error", { errorText: "Page not found" });
});

//localhost port
app.listen(4000, (req, res) => {
  console.log("Server is up and running");
});
