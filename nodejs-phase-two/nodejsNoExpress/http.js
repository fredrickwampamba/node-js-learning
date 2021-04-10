const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url === '/')
        res.write("Hello from node js web based")
    else
        res.write("Hello for other pages")
        
    res.end()
})

server.listen(2000,"localhost")