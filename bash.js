var commands = require('./commands');

// Output a prompt
process.stdout.write('prompt > ');





// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var firstArg = data.toString().split(' ')[0];
  var restOfArg = data.toString().trim().split(' ').slice(1);
  var cmd;
  cmd = firstArg.toString().trim();
  commands[cmd](restOfArg);
});
