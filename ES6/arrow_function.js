const add = function(a,b) {
  return a + b;
}

add(1,2);

/* ES6 */
const multiply = function(a,b){
  return a*b;
}

multiply = (a, b) => { //fat arrow
  return a*b;
}

multiply = (a,b) => a * b

let double = number => number * 2; //인자가 하나일 경우만 괄호 생략 가능
let print = () => 'Daeun';

const numbers = [1,2,3];

let doubledNumbers = numbers.map((number) => {
  return 
})

const doubledNumbers = numbers.map((number) => {
  return 2 * number;
});

doubledNumbers = numbers.map(number => 2 * number)

const team = {
  members: ['Iron man','Hulk','Thor'],
  teamName: 'Avengers',
  teamSummary: function() {
    return this.members.map(function(member){
      return `${member} is the ${this.teamName}`;
    });
  }
};

const team = {
  members: ['Iron man','Hulk','Thor'],
  teamName: 'Avengers',
  teamSummary: function() {
    return this.members.map(member => {
      return `${member} is the ${this.teamName}`;
    });
  },

  // ES6
sayHello(){
  console.log('Hello');
}
};

