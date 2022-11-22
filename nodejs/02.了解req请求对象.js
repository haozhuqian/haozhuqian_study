const http = require('http')
const server = http.createServer()
server.on('request',(req,res) =>{
    const url =req.url;
    const mothod = req.url;
    const str = `your request url is ${url} and request method is ${req.method}`
    console.log(str)
})
server.listen(8080,() =>{
    console.log("Server run at http://127.0.0.1")
})