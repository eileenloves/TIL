const http = require('http');

function getLottoData(drwNo){
  const url = `http://www.nlotto.co.kr/common.do?method=getLottoNumber&drwNo=${drwNo}`;
  let lottoData = {};

  return new Promise((resolve, reject)=>{
    http.get(url, res=>{
      let buff = '';
      res.on('data', chunk => {
        buff += chunk;
      });
  
      res.on('end',()=>{
        // console.log(JSON.parse(buff));
        let lottoData = JSON.parse(buff);
        resolve(lottoData);
      })
    })
  })
}


function findLuckNumbers(lottoData={}) {
  for (const [key, value] of Object.entries(lottoData)){
    console.log(`${key} : ${value}`);
  }
}

const realNum = [ 
];
const bnusNo;

const numbers = _.range(1, 46);
const myNumbers = _.sample(numbers,6).sort();
console.log(myNumbers);
