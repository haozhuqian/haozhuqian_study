const http = require('http');

//创建一个http对应的服务器
const server = http.createServer((request,response)=>{
  //request对象包含本次客户端请求的所有信息
  //是可读流
  //url,method,headers,params等等

  //response对象用于给客户端返回结果
  //可写流
  response.end('Hi,GoodMoney');
})

//开启对应的服务器，并告知需要监听的端口
//监听1024以上的端口，65535一下的端口（两个字节存贮端口号）
server.listen(8080,()=>{
  console.log('服务器启动');
})