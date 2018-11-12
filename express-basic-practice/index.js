const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const users = [
  { id: 1, name: 'john', email: 'john@hphk.kr', age: 33 },
];

app.get('/', (req, res) => {
  res.send('HappyHacking');
});

app.get('/api/users', (req, res) => {
  res.send(users);
});

app.get('/api/users/:id', (req, res) => {
  const user = getUser(users, parseInt(req.params.id));
  if(!user) return res.status(404).send(`No User with id: ${req.params.id}`);

  res.send(user);
});

app.post('/api/users', (req, res) => {
  const { error } = validateUser(req.body);   
  //const error = validateUser(req.body).error => 이 문장에 중복이 많음 이것을 해결하기 위한 비구조화 문장 { error }
  if(error) return res.status(400).send(error.message);

  const { name, email, age } = req.body;

  const user = {
    id: users.length + 1,
    name: name,
    email,  // =email:email,
    age: age || null,
  };

  users.push(user);
  res.send(user);
});

app.put('/api/users/:id', (req, res) => {
  const user = getUser(users, parseInt(req.params.id));
  if(!user) return res.status(404).send(`No User with id: ${req.params.id}`);

  const { error } = validateUser(req.body);  //body가 validate를 통과했는지 받는 코드
  if(error) return res.status(400).send(error.message);

  // user.name = req.body.name;
  // user.email = req.body.email;
  // user.age = req.body.age;
  const { name, email, age } = req.body;
  user.name = name;
  user.email = email;
  user.age = age;
  res.send(user);
});

// User를 찾아서 해당 user를 삭제
app.delete('/api/users/:id', (req, res) => {
  const user = getUser(users, parseInt(req.params.id));
  if(!user) return res.status(404).send(`No User with id: ${req.params.id}`);

  const index = users.indexOf(user);
  users.splice(index, 1);
  res.send(user);
});

// User를 찾는 함수
function getUser(users, id) {
  return users.find(user => user.id === id);
}

//user에 대한 유효성 검사
function validateUser(user) {
  const schema = {
    name: Joi.string().required().min(1),
    email: Joi.string().email().required().min(5).max(25),
    age: Joi.number().min(3), // 3이상 (세글자 아님)
  };

  return Joi.validate(user, schema);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`${port} (@ᐛ)و `));