// // Factory function 

function createCircle(radius) {
	return {
		radius,
		draw: function() {
			console.log('draw')

		}
		
		
	};

}

console.log(createCircle());

const Circle = createCircle(5);
let selection = 'name1';
Circle[selection] = "high"


console.log(Circle.selection); 

// console.log(Circle.radius);


//constructor function  

function jircle(radius) {
    //console.log('this', this)
   jircle.radius = radius ;
    this.draw = function () {
        console.log('draw');

    }
}

let circle = new jircle(55);




// //add and delete in property

// circle.location = {x:1};

// const propertyName = 'center location';
// circle[propertyName] = { x: 1 };

// //delete circle['location'];

// //enumaerte

// for (let key in circle) {
// 	if  (typeof circle[key] !== 'function')
// 	console.log(key,circle[key]);

// }
// const keys = Object.keys(circle);
// console.log(keys);
// console.log(keys.length);

// if ('radius' in circle)
// console.log('Circle has a radius.');




// // // //object incremental

// // // let obj = {value :10};

// // // function increase (obj) {
// // // 	obj.value++;
// // // }
// // // increase(obj);
// // // console.log(obj);




