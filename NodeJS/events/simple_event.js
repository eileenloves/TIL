const EventEmitter = require('events');

class Job extends EventEmitter {}

const job = new Job();

job.on('warning',(season) => { //총알 장전
  console.log(`${season} is coming`);
});

job.emit('warning','winter'); //실제 이벤트를 발생시키는 함수 emit(), 총알 발사
