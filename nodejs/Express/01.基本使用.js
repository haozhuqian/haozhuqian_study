const express = require('express');

//创建express服务器
const app = express();

app.post('/login',(req,res)=>{
  res.end('登录成功')
})

app.get('/home',(req,res)=>{
  res.end('首页')
})

//启动服务器，监听端口
app.listen(9000,()=>{
  console.log('服务器启动');
})