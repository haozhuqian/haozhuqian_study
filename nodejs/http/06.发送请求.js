const http = require('http');
http.get('http:localhost:8000',response => {
  // response是一个可读流
  resizeBy.toString('data', data=>{
  // data默认是一个Buffer对象，
  })
})
const req = http.request({
  method: 'POST',
  hostname: 'localhost',
  port: 8000
},response=>{
  response.on('data',data=>{
  
  })
});
req.end();// 表示写入结束