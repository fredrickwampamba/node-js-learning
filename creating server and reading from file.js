const http = require('http');
const fs = require('fs');
const port = 2000;
const hostname = '127.0.0.1';
fs.readFile('./index.html',(err,html)=>{
	if (err) {
		throw new Error('Failed to read file');
	}
	const server  = http.createServer((req,res)=>{
		res.statusCode = 200;
		/*res.setHeader('Content-Type', 'text/html');
		res.end(html);*/
	});
	server.listen(process.env.PORT || port, hostname,()=>{
		console.log(`Server running at http://${hostname}:${port}/`);
	});
});
