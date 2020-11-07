const net  = require('net');
const port = 8080;
const server = net.createServer((connection)=>{
	console.log("Client connected");
	connection.on('end',(end)=>{
		console.log('client disconnected');
	});
	connection.write('hello world!\r\n');
	connection.pipe(connection);
});
server.listen(port,()=>{
	console.log('The server is listening at port: '+port);
});