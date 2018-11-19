/* ES5 Object */
var computer = {
  model: 'LG gram',
  year: 2017,
}

var model = computer.model;
var year = computer.year;

/* ES6 Object */
const laptop = {
  model: 'Macbook Air',
  year: 2018,
}

// const { model } = laptop;
// const { year } = laptop;
const { model, year } = laptop;

/* ES5 Function */
var savedFile = {
  extension: 'jpg',
  name: 'profile',
  size: 29847
}

function fileSummary(file){
  return `${file.name}.${file.extension} 의 크기는 ${file.size}입니다.`
}

/* ES6 Function */
const myFile = {
  extension:'jpg',
  name: 'profile',
  size: 29847
}

function fileSummary({extension,name,size}){
  return `${name}.${extension} 의 크기는 ${size}입니다.`
}

fileSummary(myFile);

/* ES5 Array */


/* ES6 Array */
const companies = [
  'Google',
  'IBM',
  'Amazon'
]
  
let firstCompany = companies[0];
[ firstCompany ] = companies

const { length } = companies;
console.log(length);

const [one, ...rest] = companies;
console.log(one);
console.log(rest);

/* Array & Object */
const wannaGo = [
  { name:'Google', location: 'Mountain View'},
  { name:'Facebook', location: 'Menlo Park'},
  { name: 'Apple', location:'Cupertino'}
];
 let [ company ] = wannaGo;
 [{location}] = wannaGo;

/* 실제 개발에서는? */
const points = [
  [7,12],
  [-20,3],
  [8,0]
];

points.map(([x,y]) => {
  return {x, y};
})

function signup({username, password,email}){
  // Create user
}
const user = {
  username: 'Eileen',
  password: '123123',
  email: 'eileenkim1208@gmail.com'
}

signup(user);

/* 실습1 */
const profile = {
  title: 'Engineer',
  department: 'Blockchain'
};

function isEngineer({title,department}) {
  return title === 'Engineer' && department === 'Blockchain'
}


/* 실습2 */
const classes = [
  ['실전 dApp','9am','Mr.john'],
  ['React','1am','neo'],
  ['Capstone','3am','multicampus']
]

const classAsObject = classes.map(([subject,time,name]) = {
  return {subject,time,teacher};
})

/* 실습3 */
