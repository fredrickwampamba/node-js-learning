const fs = require("fs")
const zlib = require("zlib")

const zipper = zlib.createGzip()

const readStream = fs.ReadStream("./assets/somefile.txt")
const writeStream = fs.WriteStream("./assets/pipedzip.txt.gz")

readStream.pipe(zipper).pipe(writeStream)