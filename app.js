const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

let titleOption = {
  describe: 'Title of note',
    demand: true,
    alias: 't'
};

let bodyOption = {
  describe: 'Content of the note',
  demand: true,
  alias: 'b'
};

const argv = yargs
  .command('add', 'Add a new note',{
    title: titleOption,
    body: bodyOption
  })
  .command('list', 'List all note',{})
  .command('read', 'View a single note',{title: titleOption})
  .command('remove', 'Remove a note',{title: titleOption})
  .argv;
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
  let allNotes = notes.getAll();
  console.log(`Listing ${allNotes.length} Notes`);
  allNotes.map((note) => notes.logNote(note));
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