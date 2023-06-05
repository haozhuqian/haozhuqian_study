const fs = require('fs');

//申请8字节的Buffer内存空间
const buf = Buffer.alloc(8)

//逐字节操作
console.log(buf);
buf[0]=128
buf[1]=100
console.log(buf);


buf[2]='m'.charCodeAt()
console.log(buf);