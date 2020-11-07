const dns = require('dns');
console.log("IP address and it's family fetch");
dns.lookup("localhost",(err,address,family)=>{
	if (err){
		console.log(err);
		return;
	}
	console.log("Address: "+address+" Family: "+family);
});

console.log("using reverse and resolve4");
dns.resolve4("localhost",(err,address)=>{
	if(err){
		console.log(err);
	}
	console.log("Address: "+JSON.stringify(address));
	address.forEach((a)=>{
		dns.reverse(a, (err,hostnames)=>{
			if (err) {
				console.log(err);
			}
			console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
		});
	});
});
console.log("Getting the service and the host name of the service");
dns.lookupService('127.0.0.1',22,(err, hostname, service)=>{
	if(err){
		console.log(err);
	}
	console.log(hostname,service);
});