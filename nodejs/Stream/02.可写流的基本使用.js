const fs = require("fs");

const writeStream = fs.createWriteStream('./try.txt',{flags:'a+'})

writeStream.write('nice')
writeStream.write(' 6')

writeStream.on('close', () => {
  console.log('close stream');
})

writeStream.on('open', () => {
  console.log('open stream');
})
// 写完触发
writeStream.on("finish", () => {
  console.log('finish stream');
})

// 将最后的内容写入文件并关闭文件
writeStream.end('end')
