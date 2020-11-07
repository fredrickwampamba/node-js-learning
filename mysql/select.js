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
	connection.query("SELECT * FROM users",(err,result)=>{
		if (err) throw err; 
		console.log("This is from the table users");
		console.log(result);
	});
});


