const mysql = require('mysql');
var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: ""
});
connection.connect((err)=>{
	if (err) throw err;
	console.log("Connection successfully established");
	connection.query("CREATE DATABASE IF NOT EXISTS nodejsTest",(err,result)=>{
		if (err) throw err; 
		console.log("Database created: ");
	});
	
});
