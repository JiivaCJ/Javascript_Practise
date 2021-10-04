// primites
let name = 2 
let age = 30;
let firstName = undefined ;
let isApproved = true ;
let selectedColor = null;
console.log(selectedColor);
selectedColor = 5;
console.log(selectedColor);


//console.log( firstName );

//reference types

object
let person = {
    name1 : 'raj',
    age : 35,
};
person.gender = "male"
person.hieight= "5.2"

 console.log(); 
 person.selection = "true"
 console.log(person["selection"]);

 console.log(lengthof.person); 

// dot notection 
person.name1 = 'john';
console.log(person.name1);
//bracket notation

let selection = 'name1';
person[selection] = 'Vicky';


console.log(person.name1);

// //array 
let selectedColors =['red','green','pink']
//selectedColors[2] = 'fire';
console.log(selectedColors[2])

//function 
//task
function greet (Name,lastName) {
    console.log('hello   ' + Name + ' ' + lastName )

}

// //greet ('john','smith');
// greet ('smith','hari');

//calculate a value
// function square(no) {
//     return no*no ;
// }

// console.log(square(2));

// function createCircle(radius) {
// 	return {
// 		radius,
// 		draw: function() {
// 			console.log('draw')

// 		}
		
		
// 	};

// }


// const Circle = createCircle(5);
// Circle.draw();

function Circle(radius) {
    //console.log('this', this)
    this.radius = radius ;
    this.draw = function () {
        console.log('draw');

    }
}

const circle = new Circle(55);
circle.draw();
circle.location = {x:1};

console.log(circle.location);

