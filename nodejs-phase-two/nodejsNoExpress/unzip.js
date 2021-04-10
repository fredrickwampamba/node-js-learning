const fs = require("fs")
const zlib = require("zlib")

const unZip = zlib.createGunzip()

const readStream = fs.ReadStream("./assets/pipedzip.txt.gz")
const writeStream = fs.WriteStream("./assets/uncompressed.txt")

readStream.pipe(unZip).pipe(writeStream)