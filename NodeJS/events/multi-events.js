const EventEmitter = require('events');
class Emitter extends EventEmitter {};
emitter = new Emitter();

emitter.on('knock',()=> {
  console.log("누구세요");
})

// emitter.once('knock',()=> {
//   console.log("저리 가세요!");
// })

emitter.emit('knock');

// emitter.removeAllListeners();

emitter.emit('knock');