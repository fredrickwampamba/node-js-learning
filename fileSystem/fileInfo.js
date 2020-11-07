const fs = require('fs');
fs.stat("input.txt",(err,stats)=>{
	if(err){
		console.log(err.stack);
	}
	console.log("Is it a file?  "+stats.isFile());
	console.log("Is it a directory?  "+stats.isDirectory());
	console.log("Is it a symbolic link?  "+stats.isSymbolicLink());
	console.log("Is it a Socket?  "+stats.isSocket());
});
console.log("Program end");