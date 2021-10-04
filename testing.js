// // // primites
// // let name = 2 
// // let age = 30;
// // let firstName = undefined ;
// // let isApproved = true ;
// // let selectedColor = null;
// // console.log(selectedColor);
// // selectedColor = 5;
// // console.log(selectedColor);
// // Factory function 

// function Square([radius]) {
// 	return {
// 		radius,
// 		value:
//             radius,radius

        

		
		
		
// 	};

// }

// const square = Square(5)
// console.log(square);

// // function squre(radius) {
// //     return{
// //         radius,
// //         value : () { radius*3.5
// //         }
// //     }
// // };




// // Circle.draw();
// // const Circle1 = createCircle(6);
// // Circle1.draw();

// //constructor function 
// /* 

// function Circle(radius) {
//     //console.log('this', this)
//     this.radius = radius ;
//     this.draw = function () {
//         console.log('draw');

//     }
// }

// const circle = new Circle(55);

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

// if ('radius' in circle)
// console.log('Circle has a radius.');*/
// // Array.prototype.duplicate = function() {
  
// //     var len = this.length;
    
// //     for (var i = 0; i < len; i++) {
// //       this[len + i] = this[i];
// //     }
    
// //     return this;
// //   }
    
// //   Array.prototype.duplicate = function () {
// //       var array = this;
// //       return array.concat(array);
// //   };

//   //
// //   Array.prototype.duplicator = function (){
// //     var a = [];
// //     for(var i=0;i<10;i+=2){
// //     a[i]=this[i];
// //     a[i+1]=this[i];
// // }
// // return a;
// // };
// //  [1,2,3,4,5].duplicator();
// Array.prototype.duplicate = function() {
//     return [].concat.apply([], this.map(function(v) {
//       return [v,v];
//     }));
//   };
  
//   console.log([1,2,3,4,5].duplicate()); //=> [1,1,2,2,3,3]

//   //
//   Array.prototype.duplicator = function() {
//     var dup = [];
//     for (var i = 0; i < this.length; i++) {
//       dup[2 * i] = dup[2 * i + 1] = this[i];
//     }
//     return dup;
//   };
  
//   console.log([1,2,3,4,5].duplicator());

let array1 = ['a', 'b', 'c'];
let array2 = ['d', 'e', 'f'];
let array3 = array1.concat(array2);

console.log(array3);

// let array1 = ["a", "b","c"];
// let array2 = ["c", "c" ,"d","e"];
// let array3 = [...  ([...array1 ,...array2])];
// console.log(array3); 
//a b c 
//array3,array4



function greeting (name,age) {
    
   
    return "my name is  "+ name + "my age is "+age ;  
        
    

}
console.log(greeting("hari","25"));
// string operation 
// slice 
// find last index
// menub
// ararthithmetic operators
// comparison operators 
// assignment operators
// equality operators
// lose equality operators
// ternary operator 
// logical operators
// truth & falsy mechanisum
// conditional statements

// let name1 = "text1"
// let name2 = "text2"

// let name3 = name1.concat(name2);
// //text1text2
// console.log(name3);

function greet() {
    
    
}
