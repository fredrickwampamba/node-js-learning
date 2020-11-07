const fs  = require('fs');
// asynchronous read
fs.readFile("input.txt",(err,data)=>{
	if (err) {
		console.error(err.stack);
	}
	console.log("Asynchronous Read:  "+data.toString());
});
//synchronous read
var data = fs.readFileSync("input.txt");
console.log("Synchronous Read:  "+data.toString());
console.log("End of program");
