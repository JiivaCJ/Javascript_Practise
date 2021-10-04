//if condition
//Tour plan 

let  bike = 1 ;
let car = 0 ;

if ( bike || car) { 
    let x= (" travel by own" );
    console.log(x);

}
else {
    console.log(" travel by public transport " );


}

//if hour is between 8am to 10 am -> Brakefast
// Else if hour is between 12am to 14pm -> lunch
// else hour is between 19pm to 21pm -> Dinner

//let hour = 24;

let hour = new Date().getHours();

if ( hour >=8 && hour <= 10 )

    console.log("Good Morning take your breakfast tocken");
else if ( hour >=12 && hour <= 14 )

console.log("Good noon take your lunch tocken");

else if (  hour >=12 && hour <= 14  )

console.log("Good night take your dinner tocken");

else //(  hour >=0 && hour <= 24 )

    console.log(" Resticted hours ");

//switch case
/* syntax 

switch(codition){
    case 1:
        log("1");
    case 2:
        log("2");
    default:
        log("default behaviour");
        */
/*let mark = 56;

switch (true) {
    case (mark >=90 && mark <= 100):
        console.log("grade = S");
        
        break;
    case (mark >=80 && mark <= 99):
        console.log("grade = A");
        break;
    case (mark >=50 && mark <= 79):
        console.log("grade C");
        break;
    default:
        console.log("Grade = u fail");
        break;
} */

/*
syntax
for(initialExpession ; condition ; step ) {
    console.log();
}
*/


// for(let i = 0; i <30 ; i++){
//     console.log( "number #" , i );
// }

//odd number (i % 2 !== 0)
for(let i = 0; i <30 ; i++){
    if (i%2 !==0){
        console.log( "number #" + i );

    }
     
    
}
//even number (i % 2 == 0)

for(let l = 0; l <=30 ; l++){
    if (l%2 ==0){
        console.log( "number #" + l );

    }

}











