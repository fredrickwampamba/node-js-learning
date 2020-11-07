const mysql = require('mysql');
var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "nodejsTest"
});
connection.connect((err)=>{
	if (err) throw err;
	console.log("Connection successfully established");
	/*i ma going to show multiple insertion rather than the normal one, but the normal one also works well*/
	var sql = "insert into users(`username`,`password`) values ?";
	var values = [
		['fredrick','1234'],
		['admin','abcd'],
		['kiweewa','kiwe23']
	];
	connection.query(sql,[values],(err,result)=>{
		if (err) throw err; 
		console.log("rows entered");
	});
});


