const fs = require('fs');
const zlib = require('zlib');
// var createfile = fs.createWriteStream('input.txt');
// const dataToBeWirtten = ""
// createfile.write(dataToBeWirtten,"utf-8");
var createZip = fs.createReadStream('input.txt')
				.pipe(zlib.createGzip())
				.pipe(fs.createWriteStream("input.txt.gz"));
console.log("The file has been created successfully");