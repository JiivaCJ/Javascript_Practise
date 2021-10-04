let x = "hello"
// let y = x.split("");  //["h","e","l","l","o"]
 let z = "" //string is empty
// for (i=y.length-1;i>=0;i--){   
//     z += y[i]  
// }
// console.log(z);



for (j=x.length-1;j>=0;j--){   
    z += x[j]  
}
console.log(z);



function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("jiiva");
console.log(reverseString("jiiva"));

function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
  }
  reverseString("hello");


const str = 'Hey There';
let split = str.split(' ');
const str1 = split[1];
let str0 = split[0];
function reverse(str0){
    let reversed = " ";
    for (var i = str0. length - 1; i >= 0; i--){
    reversed += str[i];
    }
    return reversed;
}
console.log(str1 + reverse(str0));


const ReverseString = str => [...str].reverse().join('');
  
console.log((ReverseString("hi hello jiva")));


// program to count the number of vowels in a string

function countVowel(str) { 

    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    return count;
}

// take input
const string = prompt('Enter a string :')

const result = countVowel(string);

console.log(result);


// JavaScript program to remove the first
      // and last character of each word in a string.
      function FirstAndLast(str) {
        // add a space to the end of the string
        str += " ";
 
        var res = "",
          w = "";
 
        // traverse the string and extract words
        for (var i = 0; i < str.length; i++)
        {
          if (str[i] === " ") {
            // excluding the first and
            // last character
 
            res += w.substring(1, w.length - 1) + " ";
 
            // clear the word
            w = "";
          } else {
            // else add the character to word
            w += str[i];
          }
        }
 
        return res;
      }
 
      // Driver code
      var str = "Geeks for Geeks";
      document.write(str + "<br>");
      document.write(FirstAndLast(str) + "<br>");

      //JavaScript Program to find
//sum of elements in a given array
 
    // function to return sum of elements 
    // in an array of size n 
    function sum(arr) { 
        let sum = 0; // initialize sum 
   
        // Iterate through all elements 
        // and add them to sum 
        for (let i = 0; i < arr.length; i++) 
            sum += arr[i]; 
   
        return sum; 
    } 
     
    // Driver code
    let arr = [12, 3, 4, 15];
    document.write("Sum of given array is " + sum(arr)); 