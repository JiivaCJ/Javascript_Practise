function greet2(msg, name) {
    return ("helo " + name + '  ,' + msg);
}

let h = greet2(" how are you", "jeeva");
console.log(h);

let l = greet2("how are you", "john");
console.log(l);

greet2() = greet5()
greet5("how are you", "kk");
console.log(greet5);

let person = new Object();
console.log(person instanceof Object);

person.name = "john"
person.preofession = "engineer"
console.log(person.name);
//its a function but it was in object it condisder as method
person.sayhi = function () {
    console.log("hi  " + person.name);
}

person.sayhi();

let obj = new Object(); //object create by constructor syntax
//obj = identifer as proberty

let obj2 = {}; // object literial syntax

let user2 = {
    Name: 'hari',
    profession: "mechanic",
    hi: function () {
        console.log("hello   " + user2.Name, user2.profession);
    }
}

user2.hi();

var user3 = user2;
user3.hi();
user2 = null;
user3.hi();

console.log(user3);



