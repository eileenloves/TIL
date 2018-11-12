//하나의 미들웨어로서 req,res,next 3가지를 인자로 가짐
function authenticator(req,res,next){
  console.log('사용자 인증을 진행중입니다:)')
  next();
}

module.exports = authenticator;