/* ES6 */
var name = '김다은';
var title = 'Junior web developer';
var workHour = '9 am to 6 pm';

name = "Eileen";
title = "Senior";

function count(targetString) {
  var characters =['a','e','i','o','u'];
  var number =0;

  for (var i=0;i<tagerString.length;i++){
    if(characters.includes(targetString[i])){
      number++;
    }
  }
  return number;
}

/* ES6 */
const name = '김다은'; //javascript에서는 보통 const로 사용 (다시 할당해서 쓰는 것이 확실할 경우에만 let으로 사용)
let title = 'Junior web developer';
let workHour = '1 pm to 6 pm';

name = "Eileen";
title = "Senior";

function count(targetString) {
  const characters =['a','e','i','o','u'];
  const number = targetString.split('').reduce(function(acc,char){
    if(characters.includes(char)){
      acc++;
    }
    return acc;
  }, 0);
  return number;
}

