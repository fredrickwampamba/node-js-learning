const fs = require('fs')
const http = require('http')
const readStream = fs.createReadStream("./static/image.jpg")
const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"image/jpg"})
    readStream.pipe(res)
}).listen(2000);