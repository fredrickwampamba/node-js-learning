const mysql = require('mysql');
var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: ""
});
connection.connect((err)=>{
	if (err) {
		console.error(err.stack);
	}
	console.log("Connection successfully established");
});