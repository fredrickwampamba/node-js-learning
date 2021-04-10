const fs = require('fs')
const http = require('http')
const readStream = fs.createReadStream("./static/html.html")
const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html"})
    readStream.pipe(res)
}).listen(2000);