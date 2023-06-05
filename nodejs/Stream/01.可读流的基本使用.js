const fs = require('fs');

const readStream = fs.createReadStream('./try.txt',{start:2,end:5,highWaterMark:2});
//获取第2,3,4,5字节,每次获取2字节.highWaterMark默认为64kb
readStream.on('data', data=>{
  console.log(data);

  readStream.pause();//暂停读取
  readStream.resume();//恢复读取
})

readStream.on('open', (fd)=>{
  console.log("open a file");
})

readStream.on('end',()=>{
  console.log("have readed the end");
})

readStream.on('close',()=>{
  console.log("close the file");
})