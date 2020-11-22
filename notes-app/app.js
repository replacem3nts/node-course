const chalk = require('chalk');
const getNotes = require('./notes');

const msg = getNotes();
console.log(msg);

const success = chalk.blue.bold.inverse('What?!');

console.log(success);
