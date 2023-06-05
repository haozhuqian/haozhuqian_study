const fs = require('fs');

fs.readFile('./try.txt',(err,data)=>{
  console.log(data);
})

//甚至可以读取图片文件的内容