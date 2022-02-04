const validator = require("validator");
const chakl = require("chalk");
const getnote = require("./notes.js");
const yargs = require("yargs");

// const fs = require('fs')
// fs.appendFileSync('notes.txt', 'I live in Goa!!!')
// const msg=getnote();
// console.log(msg);

// //using validator package checking emmail.

// console.log(validator.isEmail('adghsggail.com'));
// console.log(chakl.green("Sucess!"));

// const comand = process.argv[2];

// if (comand === "add") {
//   console.log("Adding Notes");
// }

yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    body: {
      describe: "this is body",
      demandOption: true,
      type: "string",
    },
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Adding new note", argv.title);
    console.log("adding new note", argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "reove a new note",
  handler: function () {
    console.log("removing note");
  },
});
yargs.command({
  command: "read",
  describe: "read a new note",
  handler: function () {
    console.log("reading new note");
  },
});
yargs.command({
  command: "list",
  describe: "list a new note",
  handler: function () {
    console.log("listing new note");
  },
});
yargs.parse();
//console.log(yargs.argv);
//add, remove, read, list
