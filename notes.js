const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    console.log('Getting all notes')
    dataBuffer = fs.readFileSync('notes.json')
    console.log(dataBuffer.toString())
}


const addNote = function (title, body) {
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.green("New note added"))
    } else {
        console.log(chalk.red("Note title already exists"))
    }
    
}

const deleteNote = function (title) {
    const notes = loadNotes()

    const notesKeep = notes.filter((note) => note.title !== title)

    if (notesKeep.length === notes.length) {
        console.log(chalk.green("Note title not found"))
    } else {
        saveNotes(notesKeep)
        console.log(chalk.red("Note deleted"))
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

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    deleteNote: deleteNote
}