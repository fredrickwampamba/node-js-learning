/*chaining and piping streams. this involves compression*/
const fs = require('fs');
const zlib = require('zlib');

/*we are going to compress the file input.txt to compressed.gz*/

fs.createReadStream("input.txt")
		.pipe(zlib.createGzip())
		.pipe(fs.createWriteStream("compressed.txt.gz"));
console.log("File has been compressed successfully");
