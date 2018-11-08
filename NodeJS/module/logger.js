//node.js는 module로 구성
//module은 5개의 인자를 가진 하나의 function
(function (exports, require, module, __filename, __dirname) {

const url='http://hphk.kr'

const log = (msg) => {
  console.log(`Logging message: ${msg}`)
}

module.exports = log; // log함수를 module로 저장, exports는 다른 파일에서 쓰기 위해 사용

})