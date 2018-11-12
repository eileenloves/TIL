const p = getUser(1)
  .then(user => getRepos(user.githubID))
  .then(repos => getCommits(repos[0]))
  .then(commits => console.log(commits))
  .catch(error => console.log(error));

console.log('메인 코드 계속 진행중...');

/* functions */

function getUser(id) {
  const users = [
    {id:1,githubID:'neo'},
    {id:2,githubID:'john'}
  ]

  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const user = users.find(user => user.id === id);
      if(user) resolve(user);
      else reject(new Error(`Can not find user with id: ${id}`));
    },2000)
  });
}

function getRepos(userID) {
  console.log(`Finding [${userID}]'s all github repo...`);

  return new Promise((resolve,reject)=>{
    const i = Math.floor(Math.random()*100);
    if(i % 2 ===1) resolve(['TIL','ES6','Express-demo']);
    else reject(new Error(`Can not find user with userID: ${userID}`))
  },1500)
}

function getCommits(repo){
  console.log(`Getting all commits in [ ${repo} ]`);
  return new Promise((resolve)=>{
    resolve(['Inits repo','Finish Something']);
  },2000)
}



