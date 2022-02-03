const validator = require('validator') 
const chakl = require('chalk')
const getnote = require('./notes.js')

// const fs = require('fs')
// fs.appendFileSync('notes.txt', 'I live in Goa!!!') 
// const msg=getnote();
// console.log(msg);

// //using validator package checking emmail.

// console.log(validator.isEmail('adghsggail.com'));
// console.log(chakl.green("Sucess!"));

const comand = process.argv[2];

if(comand ==='add'){
    console.log('Adding Notes')
}

//console.log(process.argv)

