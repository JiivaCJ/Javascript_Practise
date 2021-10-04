
function Person(first, last, age, eyecolor) { 
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    

  }


let me = new Person("gorge","dude","20","black")
console.log(me);


  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");
// classes
class Car {
    constructor(brand) {
      this.carname = brand;
      console.log(brand);
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }

  mycar = new Model("Ford", "Mustang");
  console.log( mycar.show());

    