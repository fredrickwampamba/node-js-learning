/*piping the streams means the file contents of a file become the input of the other file*/
const fs = require('fs');
var readerStream = fs.createReadStream("input.txt");
var writerStream = fs.createWriteStream("output.txt");
readerStream.pipe(writerStream);
console.log("Program has ended");