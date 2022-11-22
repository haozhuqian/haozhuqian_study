const http = require('http')
const server = http.createServer()
server.on('request',function(req,res){
    console.log("Some visit out web server.")
})
server.listen(8080,function(){
    console.log("Server is listening on port 8080.")
})