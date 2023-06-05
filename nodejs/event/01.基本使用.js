const EventEmitter = require('events');
// 引入事件总线类

const emitter = new EventEmitter();

emitter.on('money', ()=>{
  console.log("监听到了money事件");
})
emitter.emit('money')