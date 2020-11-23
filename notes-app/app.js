const chalk = require('chalk');
const yargs = require('yargs');
const { getNotes, addNote } = require('./notes');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: argv => {
    addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove an existing note',
  handler: () => {
    console.log('Removing a note!');
  },
});

// Create read command

yargs.command({
  command: 'read',
  describe: 'Read an existing note',
  handler: () => {
    console.log('Reading a note!');
  },
});

// Create list command

yargs.command({
  command: 'list',
  describe: 'List the current notes',
  handler: () => {
    console.log('Listing all the notes!');
  },
});

// add, remove, read, list

yargs.parse();
