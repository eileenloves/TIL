/*  */
var users = [
  { name: 'Tony Stark' },
  { name: 'Steve Rogers' },
  { name: 'Thor' }
]

var user;

for (var i=0;i<users.length;i++){
  if(users[i].name === 'Tony Stark'){
    user = users[i];
    break; // 다 돌 필요가 없으니 break로 나옴
  }
}

/* ES6 find() -> 주로 PK를 찾을 때 사용 */
var user = users.find(function(user){
  return user.name === 'Tony Stark';
});

/* More complex code */
function Car(model){
  this.model = model;
}

var cars =[
  new Car('Mercedes'),
  new Car('Ferrari'),
  new Car('BMW'),
  new Car('HK')
];

var car = cars.find(function(car){
  return car.model === 'HK';
});

/* 실제로는? */
// GET 

const articles = [
  { },
  { },
  { },
  { }
];

/* 실습 1 */
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false},
  { id: 3, admin: true }
]

var admin;

var admin = users.find(function(user){
  return user.admin; // === true
});

/* 실습 2 */
var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account;

var account = accounts.find(function(account){
  return account.balance; // === 12
})

/* 실습 3 */
var laders =[
  { id:1, height:20},
  { id:2, height:25}
];

function findWhere(array, standard) {
  var property = Object.keys(standard)[0];
  return array.find(function(element){
    return element[property] === standard[property];
  })
}
 // Objext.keys()
findWhere(laders, { height:20 });
findWhere(laders, { id:3 });