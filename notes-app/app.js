const validator = require("validator");
const chakl = require("chalk");
const note = require("./notes.js");
const yargs = require("yargs");
const notes = require("./notes.js");

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
  handler() {
    note.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "reove a new note",
  builder: {
    title: {
      describe: "No Body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});
yargs.command({
  command: "read",
  describe: "read a new note",
  builder: {
    title: { describe: "Notes title", demandOption: true, type: "string" },

    handler(argv) {
      notes.readNote(argv.title);
    },
  },
});
yargs.command({
  command: "list",
  describe: "list a new note",
  handler() {
    notes.listnotes();
  },
});
yargs.command({
  command: "read",
  describe: "read a new note",
  handler() {
    notes.listnotes();
  },
});
yargs.parse();
//console.log(yargs.argv);
//add, remove, read, list
