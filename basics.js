/* Types in javascript (aka ECMAScript) */

// Numbers //

var number = 0.004;
var notAnInteger = 23;

// convert strings to numbers
parseInt('1362', 10); // 1362 (base 10)
parseInt('0x104'); // hexadecimal
isNaN(parseInt('alpacas are life', 10)); // true
// this also works
+ '193'; // 193

+ '12b3'; // NaN
parseInt('12b3'); // 12

// Strings //

// can be used like objects too
'hello'.charAt(0); // "h"
'hello, world'.replace('hello', 'goodbye'); // "goodbye, world"
'hello'.toUpperCase(); // "HELLO"

Boolean('' && false && 0 && NaN && null && undefined); // all falsy
// everything else is truthy!!

// Variables //

// Scope is a weird thing
isFinite(cutePuppy); // false
for (var cutePuppy = 0; cutePuppy < 11; cutePuppy++) {

}
isFinite(cutePuppy); // true


// == does type coercion, but === will match types exactly
123 == '123'; // true
123 === '123'; // false

// Arrays 

var wontKillMe = new Array("Tian", "Vegetables", "Hugs");
var human = wontKillMe[0];
alert(human); // output: Tian

// Other ways to create
var courses = new Array(3);
courses[0] = "HTML";
courses[1] = "CSS";
courses[2] = "JS";

var sameCourses = ["HTML", "CSS", "JS"]; 

// Array Methods
var len = courses.length;

courses.concat(sameCourses);

// Associative arrays (dictionaries in C#)
var person = []; //empty array
person["name"] = "John";
person["age"] = 46;
document.write(person["age"]); //Outputs "46"
/* If you use a named index, JavaScript will redefine the array to a standard object. */