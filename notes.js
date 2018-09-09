console.log('Starting notes.js');

let addNote = (title, body) => {
  console.log('Adding note' , title, body);
  return 'new note ';
};

let getAll = () => {
  console.log("Getting All notes");
};

let getNote = (title) => {
  console.log('Getting note', title);
};

let removeNote = (title) => {
  console.log('Removing note', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};