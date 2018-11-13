const p1 = new Promise((resolve,reject)=>{
  console.log('Fetching from Bank1...');
  setTimeout(()=>{
    const response = {bank:1,delayed:false};
    resolve(!response.delayed);
  },1000)
});

const p2 = new Promise((resolve,reject)=>{
  console.log('Fetching from Bank2...');
  setTimeout(()=>{   
    const response = {bank:2,delayed:true};
    resolve(!response.delayed);
  },1400)
});

const p3 = new Promise((resolve,reject)=>{
  console.log('Fetching from Bank3...');
  setTimeout(()=>{
    const response = {bank:3,delayed:false};
    resolve(!response.delayed);
  },2000)
});

//all은 배열에 있는 세개가 다 도착했을 때 출력
// Promise.all([p1,p2,p3])
  // .then(result => console.log(result));
  // .catch()

//race는 먼저 도착한 놈을 출력!
Promise.race([p1,p2,p3])
.then(result => console.log(result));