const http = require('http');
const url = 'http://www.csszengarden.com/';

http.get(url,(response) => {
  let chunkCount = 0;

  response.on('data',(chunk) => {   //on 메서드는 emitter pattern (이벤트 발행)
    chunkCount++;
    console.log('--------------------------');
    console.log(chunk.toString('utf8'));
  });

  response.on('end',()=>{
    console.log(`res 가 ${chunkCount}개로 나눠졌어요.`)
  });
  
});