/*this stream is used for reading operations*/
const fs = require('fs');
var data = '';
var readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('utf-8');
readerStream.on("data",(getdata)=>{
	data+=getdata;
});
readerStream.on("end",()=>{
	console.log(data);
});
readerStream.on("error",(err)=>{
	console.log(err.stack)
});
console.log("The program has ended");
