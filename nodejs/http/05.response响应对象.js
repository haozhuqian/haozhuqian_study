const http = require('http');

const server = http.createServer((request,response)=>{
  response.stateCode=200;
  response.end('Hi,GoodMoney');
})

server.listen(8080,()=>{
  console.log('服务器启动');
})