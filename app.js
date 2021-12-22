const yargs = require('yargs')
const notes = require('./notes')

yargs.version("1.0.0")

yargs.command({
    command: 'get',
    describe: 'Get a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function () {
        notes.getNotes()
    }
})

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})


yargs.command({
    command: 'delete',
    describe: 'Delete a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.deleteNote(argv.title)
    }
})

yargs.parse()