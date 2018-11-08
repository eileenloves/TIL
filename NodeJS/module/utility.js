console.log('한번만 출력됩니다.');

module.exports = function(numbersToSum=[]){
  let sum = 0;
  numbersToSum.forEach(number => sum += number);
  return sum;
}

console.log('Really');