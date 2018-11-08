const express = require('express');
const app = express();

app.get('/',(req,res) => {
  res.send('We are connected!');
});

app.get('/api',(req,res)=>{
  const data = {
    gf:"Eileen",
    bf:"Dimitri"
  };
  res.send(data);
});

app.get("/api/courses/:id",(req,res)=>{
  res.send(req.params.id);
})

// /api/posts/2018?q=js&sortBy=name&recommended=true
app.get("/api/posts/:year",(req,res)=>{
  res.send(req.query);
})



const port = process.env.PORT || 3000; //앞의 포트가 없으면 3000
app.listen(3000, () => console.log(`Listening on port ${port}...`));
