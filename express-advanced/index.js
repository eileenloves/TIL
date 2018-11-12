const home = require('./routes/home');
const movies = require('./routes/movies');
const debug = require('debug')('app:startup');
// const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const logger = require('./middlewares/logger'); //logger.js가 export한 것(log함수)을 담고 있음
const auth = require('./middlewares/auth');
// const Joi = require('joi');
const express = require('express');
const app = express();

console.log(app.get('env'));
console.log(app.get('debug'));

// console.log(config.get('DB')); //설정파일을 가져옴
// console.log(config.get('DB.password'));  //배포환경에서 중요한 데이터를 가져오는 구문

// middlewares
// router들이 실행되기 전, request받은 후 바로 실행
// 위에서부터 우선순위
app.use(helmet());

// environment setting
if(app.get('env') === 'development') {
  debug('MORGAN을 실행합니다');
  app.use(morgan('dev')); //logging하는 함수: morgan
}

app.use(express.json()); //body에 있는 애들을 parsing해주는 함수
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));  //static file(image 등)을 serving해줌
app.use(logger); //그 안의 함수를 실행하고자 하는 것이 아니므로 logger()가 아님
app.use(auth); 
app.use('./api/movies',movies);
app.use(home);

app.set('view engine','pug');
app.set('views','./views'); // Default


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));