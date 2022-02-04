const fs = require("fs");

// const book = {
//   title: "Ego is the Enemy",
//   author: "black widow",
// };
// const booljson = JSON.stringify(book);
// console.log(booljson );

const dataBuffer = fs.readFileSync("1-json.json");
const datajson = dataBuffer.toString();
const data = JSON.parse(datajson);
console.log(data);
