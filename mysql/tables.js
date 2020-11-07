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
	connection.query("CREATE TABLE IF NOT EXISTS `users` (`id` int(11) NOT NULL AUTO_INCREMENT, `userName` varchar(100) NOT NULL, `password` varchar(100) NOT NULL, `updationDate` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (`id`) ) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=0 ;",(err,result)=>{
		if (err) throw err; 
		console.log("Table users created: ");
	});
});


