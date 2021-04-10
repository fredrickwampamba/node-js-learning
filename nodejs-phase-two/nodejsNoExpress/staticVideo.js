const http = require('http')
const fs = require('fs')
const readStream = fs.createReadStream("./static/video.mp4")
// const readStream = fs.ReadStream("./static/video.mp4")
const server = http.createServer((req,res)=>{
    res.writeHead(200, {"content-type":"video/mp4"})
    readStream.pipe(res)
}).listen(2000)