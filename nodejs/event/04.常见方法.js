const EventEmitter = require('events');
const { emit } = require('process');

const emitter = new EventEmitter;

emitter.on('Good',()=>{console.log(1);});
emitter.on('Good',()=>{console.log(2);});
emitter.on('Good',()=>{console.log(3);});
emitter.on('Good',()=>{console.log(4);});

emitter.on('Money',()=>{console.log(5);});
emitter.on('Money',()=>{console.log(6);});
emitter.on('Money',()=>{console.log(7);});

//获取所有的eventemitter对象注册的事件字符串数组
console.log(emitter.eventNames());

//获取监听器最大监听个数
console.log(emitter.getMaxListeners());

//获取某一个事件对应监听器个数
console.log(emitter.listenerCount("Money"));

//获取一个事件对应的监听器函数数组
console.log(emitter.listeners("Good"));

//仅监听一次
emitter.once("Nice",()=>{console.log(8);})

emitter.emit("Nice");
emitter.emit("Nice");
emitter.emit("Nice");

//将监听器移动至最前
emitter.on('OK',()=>{console.log(10);})
emitter.prependListener('OK',()=>{console.log(9);})
emitter.emit('OK');

//移除所有事件监听
emitter.removeAllListeners("Good")
//传入参数则只移除传入名称的事件监听器，否则移除全部