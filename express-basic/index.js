const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const movies = [
  {id:1, title: 'LaLaland'},
  {id:2, title: 'The Lobster'},
  {id:3, title: 'A star is born'}
]

app.get('/', (req,res) => {
  res.send('Happy Hacking');
});

app.get('/:name', (req,res)=>{
  res.send(`Hi, ${req.params.name}`)
})

// CRUD 
// Create Read Update Destroy
//  POST   GET  PUT   DELETE

/* GET /api/movies */
app.get('/api/movies',(req,res)=>{
  res.send(movies);
});

/* GET /api/movies/1 */
// app.get();
app.get('/api/movies/:id',(req,res)=>{
  const movie = movies.find(movie => movie.id === parseInt(req.params.id))
  // error시 movie가 undefined(false)상태일 때 message를 보내주면 됨:)
  if(!movie) s.status(404).send(`Movie with given id(${req.params.id}) is not found:/`)

  console.log(movie);
  res.send(movie);
});

/* POST /api/movies */
app.post('/api/movies',(req,res)=>{
  const schema = {
    title: Joi.string().min(2).required(),
  }

  const result = Joi.validate(req.body, schema); //schema를 기준으로 검사

  console.log(result);
  if(result.error) return res.status(400).send(result.error.message);

  const movie = {
    id: movies.length+1,
    title: req.body.title,
  }
  movies.push(movie);
  res.send(movie);
});

/* PUT /api/movies/1 */
app.put('/api/movies/:id',(req,res)=>{
  // movie에서 id를 찾는다
  const movie = movies.find(movie=> movie.id === parseInt(req.params.id))
  // 없으면 404
  if(!movie) return res.status(404).send(`Movie with given id(${req.params.id}) is not found:/`)

  // 아니면 입력데이터를 검사한다
  const result = Joi.validate(req.body, schema); //schema를 기준으로 검사
  // 유효하지 않으면 400 에러
  if(result.error) return res.status(400).send(result.error.message);
  // update를 한다
  movie.title = req.body.title;
  // 업데이트 한 movie 리턴
  res.send(movie);
  
  
});

/* DELETE /api/movies/1 */
app.delete('/api/movies/:id',(req,res)=>{
  const movie = movies.find(movie => movie.id === parseInt(req.params.id));
  // 없으면 404
  if(!movie) return res.status(404).send(`Movie with given id(${req.params.id}) is not found:/`)

  // delete 한다
  const index = movies.indexOf(movie);
  movies.splice(index,1);

  // 삭제한 데이터 보여주기
  res.send(movie);

});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));