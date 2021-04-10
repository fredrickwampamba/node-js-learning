const fs = require('fs')
const readStream = fs.ReadStream("./assets/somefile.txt")
const writeStream = fs.WriteStream('./assets/bigDataTransfer.txt')

readStream.pipe(writeStream);