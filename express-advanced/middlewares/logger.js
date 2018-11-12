//하나의 미들웨어로서 req,res,next 3가지를 인자로 가짐
function log(req,res,next){
  console.log('모든 요청이 올때마다 로그를 남깁니다.')
  next(); // 다음 미들웨어로 next해서 넘긴다.
}

module.exports = log;