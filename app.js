console.log("Starting app.js");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const command = argv._[0];

if(command === 'add'){
  let note = notes.addNote(argv.title, argv.body);
  if(note){
    console.log("Note Created");
    notes.logNote(note);
  }else{
    console.log("Note title already exist");
  }
}else if (command === 'list'){
  notes.getAll();
}else if (command === 'read'){
  let note = notes.getNote(argv.title);
  if(note){
    console.log('Getting Note');
    notes.logNote(note);
  }else{
    console.log('Note does not exist');
  }
}else if (command === 'remove'){
  let result = notes.removeNote(argv.title);
  if(result){
    console.log('Note Removed Successfully.');
  }else{
    console.log(`Note with title does not exist.`);
  }
}else{
  console.log('command not recognized');
}