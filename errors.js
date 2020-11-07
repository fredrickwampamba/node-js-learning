console.log("Error example 1");
try{
	const a =c =1;
	const d = a+b+c;
	console.log(d);
}catch(error){
	console.error(error+" Something went wrong");
}finally{
	console.log("Try catch block executed finally");
}

console.log("Error example 2");
const fs = require('fs');
fs.readFile("./index.php",(err,data)=>{
	if (err) {
		console.error("File doesn't exist");
		return;
	}
	console.log(data);
});