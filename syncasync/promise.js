const promise = new Promise((resolve,reject)=>{
  const number = Math.floor(Math.random()*100);
  // async한 작업중 ...
  if (number % 2 === 1) resolve({id:1,email:'eileenkim1208@gmail.com'}); // success
  else reject(new Error('Error:/')); // fail
});

promise
  .then( user => console.log(user) )
  .catch( error => console.error(error) );