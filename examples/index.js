//traditional way of function
let baseSalary = 30000;
let overtime = 10;
let rate = 20;

function  getWage(baseSalary, overtime , rate) {
	return (baseSalary + (overtime * rate));

}
Pm = getWage(null,null,null);
console.log(Pm)


//comment - first code 
console.log("HELL IN THE WORLD")


//Encapsulation
let employee = {
	baseSalary: 30_000,
	overtime : 10,
	rate : 20,

	getWage: function() {
		
		return this.baseSalary + (this.overtime * this.rate);
	}


};

AM = employee.getWage();
console.log(AM)

//raditional way of create object

const circle = {
	radius : 1,
	location: {
		x:5,
		y:100,
	},
	draw: function(){
		console.log('draw');
	}
};

circle.draw();










