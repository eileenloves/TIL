const express = require('express');
const app = express();

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
  const movie = movies.find(function(movie){
    return movie.id === parseInt(req.params.id);
  })
  if(!movie) {
    res.status(404).send(`Movie with given id(${req.params.id}) is not found:/`)
  }
  console.log(movie);
  res.send(movie);
});

/* POST /api/movies */
// app.post();

/* PUT /api/movies/1 */
// app.put();

/* DELETE /api/movies/1 */
// app.delete();


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));