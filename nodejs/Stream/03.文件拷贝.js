const fs = require('fs');

//一次性读取写入
fs.readFile('./try.txt',(err,data)=>{
  fs.writeFile('./trycopy.txt',data,(err)=>{
    if(err) {
      console.log(err);
    }
  })
})

//可读可写流
const readStream = fs.createReadStream('./try.txt');
const writeStream = fs.createWriteStream('./try.txt');

readStream.on('data',data => writeStream.write(data))
readStream.on('end',() =>{writeStream.end();});

//建立管道直接完成
readStream.pipe(writeStream)