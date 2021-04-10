const fs = require('fs')
const http = require('http')
const readStream = fs.createReadStream("./static/json.json")
const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"application/json"})
    readStream.pipe(res)
}).listen(2000);