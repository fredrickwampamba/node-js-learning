const fs = require("fs")
const readStream = fs.ReadStream("./assets/somefile.txt","utf8")
const writeStream = fs.WriteStream("./assets/chunkwriteStream.txt")
readStream.on("data", (chunk)=>{
    writeStream.write(chunk)
    // console.log(chunk)
})