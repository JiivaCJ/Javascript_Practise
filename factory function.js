  //factory function (with ex for return)


  function greet2(name,fName,age) {
    return ( "My name is " +name+ "," + "My father name is " + fName+ ", his age is " +age);
    

  }; 
 
 
 let h = greet2("john","david","25"); //"john","david","25");//orugements
 console.log(h);
 //name,fName,age

/*
 // Factory function 

function createCircle(radius) {
	return {
		radius,
		draw: function() {
			console.log('draw')

		}
		
		
	};

}



const Circle = createCircle(5);
Circle.draw();
const Circle1 = createCircle(6);
Circle1.draw();

//constructor function 
/* 

function Circle(radius) {
    //console.log('this', this)
    this.radius = radius ;
    this.draw = function () {
        console.log('draw');

    }
}

const circle = new Circle(55);

//add and delete in property

circle.location = {x:1};

const propertyName = 'center location';
circle[propertyName] = { x: 1 };

//delete circle['location'];

//enumaerte

for (let key in circle) {
	if  (typeof circle[key] !== 'function')
	console.log(key,circle[key]);

}
const keys = Object.keys(circle);
console.log(keys);

if ('radius' in circle)
console.log('Circle has a radius.');*/




