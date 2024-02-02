const myArray = [1, 2, 3];
console.log(myArray.length);  
 
myArray.color = "blue";
console.log(myArray)


let globalVariable = 10;

function greet() {
  console.log("Hello, " + globalVariable);
}
console.log("Hello, " + globalVariable);
greet(); 

function calculate() {
    // Local scope variable
    var localVariable = 20;
    console.log(localVariable);
  }

//console.log(localVariable);
calculate()

function example() {
    //let blockVariable = "outside if block";
    if (true) {
    let blockVariable = "Inside if block";
      console.log(blockVariable);
    }
    //console.log(blockVariable);
  }
  
example();

console.log(x === undefined); // true
var x = 3;

(function () {
  console.log(x); // undefined
  var x = "local value";
})();

let isTruthy = true
let result = isTruthy && "Hello";

console.log(result)
