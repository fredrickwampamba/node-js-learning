/*there are so many opening mode,, surf abot node js read / write flags operations*/
const fs = require('fs');
var writerStream = fs.open("input.txt","r",(err,feedback)=>{
	if (err) {
		console.error(err.stack);
	}
	console.log("File opened successfully");
});
/*var writing = fs.createWriteStream("input.txt");
writing.write("this is theother data tat must be written to the file",'UTF-8');
console.log("program end");*/