const http = require('http');
const url = require('url');
const queryString = require('querystring');

const server = http.createServer((request,response)=>{
  //解析url
  const urlSting = request.url;
  const urlInfo = url.parse(urlSting);
  //解析query
  const query = urlInfo.query;
  const queryInfo = queryString.parse(query)
  console.log(queryInfo.offset);
  response.end('Hi,GoodMoney');
})

server.listen(8080,()=>{
  console.log('服务器启动');
})