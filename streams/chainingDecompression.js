/*chaining and piping streams. this involves decompressions*/
const fs = require('fs');
const zlib = require('zlib');

/*we are going to decompress the file compressed.txt.gz to unzipped.txt*/

fs.createReadStream("compressed.txt.gz")
	.pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream("unzipped.txt"));
	console.log("Profram End");