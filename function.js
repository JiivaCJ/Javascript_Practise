function circle(radius) {
  //console.log('this', this)
 this.radius = radius ;
  this.draw = function () {
      console.log('draw');

  }
}

const circle = new pircle(55);




//add and delete in property

pircle.location = {x:1};

const propertyName = 'center location';
pircle[propertyName] = { x: 1 };

//delete circle['location'];

//enumaerte

for (let key in pircle) {
if  (typeof pircle[key] !== 'function')
console.log(key,pircle[key]);

}
const keys = Object.keys(pircle);
console.log(keys);
console.log(keys.length);

if ('radius' in pircle)
console.log('Circle has a radius.');









