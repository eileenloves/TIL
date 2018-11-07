/* ES6 for() */
var computers = [
  {name:'macbook',ram:16},
  {name:'gram',ram:8},
  {name:'series9',ram:32}
]

var everyComputersAvailable = true;
var someComputersAvailable = false;

for (var i =0; i < computers.length ;i++){
  var computer = computers[i];

  if(computer.ram > 16) {
    everyComputersAvailable = false;
  } else {
    someComputersAvailable = true;
  }

}

/* ES6 every */
// (computers[0] > 16 && computers[1] >16 && computers[2] >16)
var everyLaptopAvailable = computers.every(function(computer){
  return computer.ram > 16;
})

/* ES6 some */
// (computers[0] > 16 || computers[1] >16 || computers[2] >16)
var someLaptopAvailable = computers.some(function(computer){
  return computer.ram > 16;
})


/* 실제로는? */


/* 실습 1 */
var users = [
  { id:21, submit: true},
  { id:33, submit: false},
  { id:712, submit:true}
];

var allSubmitted = users.every(function(user){
  return user.submit; //하나라도 false 있으면, false가 반환
});

/* 실습 2 */
 var requests = [
   { url: '/photos', status:'complete'},
   { url: '/albums', status:'pending'},
   { url: '/users', status:'failed'}
 ];

 // 하나라도 status 중에 pending 이 하나라도 있으면, inProgress = true
 var inProgress = requests.some(function(request){
   return request.status === 'pending';
 });

 /* 실습 3 */