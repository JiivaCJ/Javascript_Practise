
let employee = {
    id : "21    ",
    name: 'ramesh',
    designation: 'project manager',
    salary: 45000,
    satelement : function() { 
       console.log("hello  " + this.id  + employee.name + "    your amount is  " + (employee.salary * (12)));

    }

    
}
 
employee.satelement();

function Circle(radius) {
    console.log('this', this)
    this.radius = radius ;
    this.draw = function () {
        console.log('draw');

    }
}

const circle = new Circle(55);
circle.draw();

circle.location = {x:1};

const propertyName = 'center location';
circle[propertyName] = { x: 1 };

//delete circle['location'];

for (let key in circle) {
	if  (typeof circle[key] !== 'function')
	console.log(key,circle[key]);

}

const keys = Object.keys(circle);
console.log(keys);

if ('radius' in circle)
console.log('Circle has a radius.');

//example of return
function myFunction() {
    return Math.PI;

  }


  let fruits = `Banana`;
  
  switch(fruits) {
    case "Banana":
        console.log ("Banana is good!");
    //   break;
    case "Orange":
        console.log ("I am not a fan of orange.");
      break;
    case "Apple":
        console.log ( "How you like them apples?");
      break;
    default:
        console.log( ` ${fruits} ,its not a fruits.`);
  }


  //factory function (with ex for return)


  function greet2(name,fName,age) {
    return h=("My name is " +name+ "," + "My father name is " + fName+ ", his age is " +age);
            console.log(h);
    

  }; 
 
 
//  let h = greet2( "john","david","25");
//  console.log(h);
 
 /*let l = greet2("how are you","john");
 console.log(l);
 
 let l = greet5()
 greet5("how are you","kk");
 greet5()= 5
 console.log(5);*/