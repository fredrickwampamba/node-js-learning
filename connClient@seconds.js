const net = require('net');
setInterval(()=>{
	const client = net.connect({port: 8080},{hostname: "localhost"}, (err,data,end)=>{
		if (err) {
			console.error(err.stack);
		}
		console.log("Connected to the server!");
		client.write('Message from the client, or to the client\r\n');
	});
	client.on("data", (data)=>{
		console.log(data.toString());
		client.end();
	});
	client.on("end",()=>{
		console.log("disconected from the server");
	});
},2000);
