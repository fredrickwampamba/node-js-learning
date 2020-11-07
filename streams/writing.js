/*this is for writing to the stream*/
const fs = require('fs');
var data = 'This is the data that has been entered into the file';
var writerStream = fs.createWriteStream('input.txt');
writerStream.write(data,'utf-8');
writerStream.on("error",(err)=>{
	console.log("Failed to write to stream");
	console.log(err.stack);
});
writerStream.on("finish",()=>{
	console.log("Finished to write to the stream");
});
console.log("The program has ended");