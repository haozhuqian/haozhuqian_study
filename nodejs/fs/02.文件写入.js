const fs = require('fs');

// 假设客户端传来一段信息如下
const content = "hellow goodmoney";

// 把这一段写入文件
fs.writeFile('./context.txt', content, {
  flag: 'w',
  encoding: 'utf8',
},(err)=>{
  if(err){
    console.log('err',err);
    return;
  } else {
    console.log('write success');
  }
})