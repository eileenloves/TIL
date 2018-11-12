const debug = require('debug')('app:startup');
const config = require('config');
const helmet = require('helmet');
const morgan = require('morgan');
const logger = require('./middlewares/logger'); //logger.js가 export한 것(log함수)을 담고 있음
const auth = require('./middlewares/auth');

const Joi = require('joi');
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

app.set('view engine','pug');
app.set('views','./views'); // Default

const movies = [
  { id: 1, title: 'Bohemian Rhapsody' },
  { id: 2, title: 'Matrix' },
  { id: 3, title: 'Edge of Tommorow' },
];

app.get('/', (req, res) => {
  res.render('index',{
    title: 'Happy Hacking',
    greeting: 'Welcome:)'
  })
  // res.send('Happy Hacking');
});

app.get('/:name', (req, res) => {
  res.send(`Hi, ${req.params.name}`);
});


/* GET /api/movies */
app.get('/api/movies', (req, res) => {
  res.send(movies);
});

/* GET /api/movies/1 */
app.get('/api/movies/:id', (req, res) => {
  const movie = getMovie(movies, parseInt(req.params.id));
  if (!movie) res.status(404).send(`Movie with given id(${req.params.id}) is not found.`);
  res.send(movie);
});

/* POST /api/movies */
app.post('/api/movies', (req, res) => {
  const { error } = validateMovie(req.body)

  if (error) return res.status(400).send(error.message);
  
  const movie = {
    id: movies.length + 1,
    title: req.body.title
  };

  movies.push(movie);
  res.send(movie);
});

/* PUT /api/movies/1 */
app.put('/api/movies/:id', (req, res) => {
  const movie = getMovie(movies, parseInt(req.params.id));
  if (!movie) return res.status(404).send(`The movie with the given ID(${req.params.id}) was not found`);
  
  const { error } = validateMovie(req.body)
  // const error = validateMovie(req.body).error;

  if (error) return res.status(400).send(error.message);

  movie.title = req.body.title;
  res.send(movie);
});

/* DELETE /api/movies/1 */
app.delete('/api/movies/:id', (req, res) => {
  const movie = getMovie(movies, parseInt(req.params.id));
  if (!movie) return res.status(404).send(`The movie with the given ID(${req.params.id}) was not found`);

  const index = movies.indexOf(movie);
  movies.splice(index, 1);

  res.send(movie);
});

function validateMovie(movie) {
  const schema = {
    title: Joi.string().min(2).required(),
  }
  return Joi.validate(movie, schema);
}

function getMovie(movies, id){
  return movies.find(movie => movie.id === id)
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));