//创建Buffer
const buf = new Buffer('Money');
console.log(buf);//<Buffer 4d 6f 6e 65 79>
const bu = Buffer.from('Money');
console.log(bu);//<Buffer 4d 6f 6e 65 79>

//中文三个字节大小
const buff = new Buffer('嗨');
console.log(buff);//<Buffer e5 97 a8>
console.log(buff.toString());//’嗨'

//解码错误会乱码

const buffe = Buffer.from('嗨','utf16le');
console.log(buffe.toString('utf8'));//�U