const path = require('path');
const fs = require('fs');
let notes_db = require("../db/notes.json");

const findById = (id, notes) => {
    console.log("notes: ", notes);
    const result = notes.filter(note => note.id === id)[0];
    
    return result;
};

function createNewNote(body){
    //console.log("Notes array: "+ JSON.stringify(notes_db));
    const note = body;
    notes_db['notes_db'].push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/notes.json'),
        JSON.stringify(notes_db, null, 2)
    );
    
    return note;
};



module.exports = {
    findById,
    createNewNote
};