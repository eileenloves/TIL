/* Rest 나머지 */
const addNumbers = (a,b) => {
  const numbers = [a,b];
  return numbers.reduce((acc,number) => {
    return acc += number;
  }, 0);
}

addNumbers(1,2,3,4,5,6,7)

const allAll = (...numbers) => {
  return numbers.reduce((acc,number) => {
    return acc += number;
  }, 0);
}

addAll(1,2,4,43,542,46)

/* Speread 펼치다*/
let defaultColors = ['red','black','blue'];
let myColors = ['black','red','white'];
let iphoneColors = ['rose gold','space gray'];

let palette = defaultColors.concat(myColors);
palette = ['brown','white',...defaultColors,...myColors,...iphoneColors]

/* 실습 */
const showShoppingList = (...items) => {
  if(items.indexOf('milk')<0){
    return ['milk', ...items]
  }
}

/** 실제 개발에서는? */
let MathLibrary = {
  caculateProduct(a,b) {
    return a*b;
  }
}

let MathLibrary = {
  multuply(a,b) {
    return a*b;
  },
  caculateProduct(...args) {
    console.log('Please use the method "multiply" instead:)');
    return this.multuply(...args);
  }
}

MathLibrary.caculateProduct(10,10)


/** 실습 */
const join = (array1,array2) => {
  return array1.concat(array2)
}

const join = (array1,array2) => {
  return [...array1, ...array2];
}

const unshift = (array, a, b, c, d, e) => {
  return [a,b,c,d,e].concat(array)
}

const unshift = (array, args) => {
  return [...args,...array];
}