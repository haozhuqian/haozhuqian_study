const EventEmitter = require('events');
// 引入事件总线类

const emitter = new EventEmitter();

function money() {
  console.log("监听到了money事件");
}

emitter.on('money', money)
emitter.emit('money')
emitter.off('money', money)
emitter.emit('money')
