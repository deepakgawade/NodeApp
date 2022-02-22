const { default: chalk } = require("chalk");
const fs = require("fs");

const getnote = function () {
  return "This is note 1";
};

const addNote = function (title, body) {
  const notes = loadnotes();

  notes.push({
    title: title,
    body: body,
  });
  saveNotes(notes);
};

const saveNotes = function (notes) {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
};

const loadnotes = () => {
  try {
    const databuffer = fs.readFileSync("notes.json");
    const dataJSON = databuffer.toString();
    const data = JSON.parse(dataJSON);
    return data;
  } catch (e) {
    return [];
  }
};

const reoveNotes = function (title) {
  const notes = loadnotes();
  const notestokeep = notes.filter(function (note) {
    return note.title !== title;
  });

  if (notes.length > notestokeep.length) {
    console.log(chalk.green.inverse("Notes Removed Successfully!"));
    saveNotes(notestokeep);
  } else {
    console.log(chalk.red.inverse("No nodes removed!"));
  }
};
module.exports = { getnote: getnote, addNote: addNote, removeNote: reoveNotes };
