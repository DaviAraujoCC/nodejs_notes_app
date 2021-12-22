const fs = require('fs')

const getNotes = function () {
    console.log('Getting all notes')
    dataBuffer = fs.readFileSync('notes.json')
    console.log(dataBuffer.toString())
}


const addNote = function (title, body) {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log("New note added")
    } else {
        console.log("Note title already exists")
    }
    
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        const data = JSON.parse(dataJSON)
        return data
    } catch (e) {
        return []
    }
}

const deleteNote = function (title) {
    console.log('Deleting note ', title)

}
module.exports = {
    getNotes: getNotes,
    addNote: addNote
}