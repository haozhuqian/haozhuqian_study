const EventEmitter = require('events');
// 引入事件总线类

const emitter = new EventEmitter();

function money(name,age) {
  console.log("监听到了money事件,参数为"+name+' '+age);
}

emitter.on('money', money)
// 传入参数
emitter.emit('money','Good',10)
