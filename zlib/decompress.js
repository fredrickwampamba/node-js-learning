const fs = require('fs');
const zlib = require('zlib');
// var createfile = fs.createWriteStream('input.txt');
// const dataToBeWirtten = ""
// createfile.write(dataToBeWirtten,"utf-8");
var createZip = fs.createReadStream('input.txt.gz')
				.pipe(zlib.createGunzip())
				.pipe(fs.createWriteStream("decompressed.txt"));
console.log("The file has been created successfully");