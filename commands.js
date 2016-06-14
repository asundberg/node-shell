
// process.stdin.on('data', function (data) {
//   var cmd = data.toString().trim(); // remove the newline

//   if(cmd === 'pwd') {
//     process.stdout.write(process.cwd());
//   } else if(cmd === 'date') {
//     var currentDate = new Date();
//     process.stdout.write(currentDate.toString());
//   } else {
//     process.stdout.write('You typed: ' + cmd);
//   }
//   process.stdout.write('\nprompt > ');
// });
var fs = require('fs');

module.exports = {
  pwd: function (file) {
    process.stdout.write(process.cwd());
    process.stdout.write('\nprompt > ');
  },
  ls: function (file) {
    fs.readdir('.', function (err, files) {
      if (err) throw err;
      files.forEach(function (file) {
        process.stdout.write(file.toString() + '\n');
      });
      process.stdout.write('prompt > ');
    });
  },
  echo: function (file) {
    process.stdout.write(file.join(' ') + '\n');
    process.stdout.write('prompt > ');
  },
  cat: function (file) {
    var path = process.cwd().toString() + '/'+ file;
    fs.readFile(path, function (err, contents) {
      if (err) throw err;
      process.stdout.write(contents.toString() + '\n');
      process.stdout.write('prompt > ');
    });
  },
  head: function (file) {
    var path = process.cwd().toString() + '/'+ file;
    fs.readFile(path, function (err, contents) {
      if (err) throw err;
      var contentsAll = contents.toString().split('\n');
      var firstFiveLinesArr = contentsAll.slice(0, 5);
      var firstFiveLinesStr = firstFiveLinesArr.join('\n');
      process.stdout.write(firstFiveLinesStr);
      process.stdout.write('\nprompt > ');
    });
  },

  tail: function (file) {
    var path = process.cwd().toString() + '/'+ file;
    fs.readFile(path, function (err, contents) {
      if (err) throw err;
      var contentsAll = contents.toString().split('\n');
      var lastFiveLinesArr = contentsAll.slice(-5);
      var lastFiveLinesStr = lastFiveLinesArr.join('\n');
      process.stdout.write(lastFiveLinesStr);
      process.stdout.write('\nprompt > ');
    });
  },

  sort: function (file) {
    var path = process.cwd().toString() + '/'+ file;
    fs.readFile(path, function (err, contents) {
      if (err) throw err;
      var contentsAll = contents.toString().split('\n');
      var sortedArr = contentsAll.sort();
      var sortedStr = sortedArr.join('\n');
      process.stdout.write(sortedStr);
      process.stdout.write('\nprompt > ');
    });
  },

  wc: function (file) {
    var path = process.cwd().toString() + '/'+ file;
    fs.readFile(path, function (err, contents) {
      if (err) throw err;
      var contentsAll = contents.toString().split('\n');
      var numLines = contentsAll.length;
      process.stdout.write(numLines.toString());
      process.stdout.write('\nprompt > ');
    });
  },

  uniq: function (file) {
    var path = process.cwd().toString() + '/'+ file;
    fs.readFile(path, function (err, contents) {
      if (err) throw err;
      var contentsAll = contents.toString().split('\n');
      // var newArr = contentsAll.filter(function (el) {
      //   for(var i = 0; i < contentsAll.length; i++) {
      //     if(el === contentsAll[i]) {
      //       return false;
      //     } else {
      //       return true;
      //     }
      var newArr = [];
      for (var i=1; i<contentsAll.length; i++){
          if (contentsAll[i]!==contentsAll[i-1]){
            newArr.push(contentsAll[i]);
          }
      }
      var newStr = newArr.join('\n');
      process.stdout.write(newStr.toString());
      process.stdout.write('\nprompt > ');
    });
  }

};
