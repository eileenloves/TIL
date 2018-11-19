/* ES5 something like class */
class Car{
  constructor({title}) {
    this.title = title;
  }

  drive(){
    return 'Vroom';
  }
}

class Audi extends Car{
  constructor(options){
    super(options);
    this.color = options.color;
  }
}

const car = new Car({title: 'A6'});
console.log(car);
console.log(typeof car);