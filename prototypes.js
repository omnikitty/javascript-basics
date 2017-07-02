/* Javascript has one complex data type, Object.
It has five simple types: Number, String, Boolean, Undefined, and Null.
NOTE: Simple types immutable, objects mutable (can be changed).

An object is a collection of variables (can be data or functions)
stored as name: value pairs.

Variables in an object are called properties.
Functions in objects are called methods. 
*/

// Reference vs Primitive types
// Reference type's value stored as reference, not value in variable.

var person = "Stephen"; // primitive string stored in variable
var nextPerson = person; // value of person variable stored in nextPerson
person = "Hawking";

console.log(nextPerson); // "Stephen"
console.log(person); // "Hawking"
// NOTE: because value stored IN variable, when person changed nextPerson was same

// referenced values below produce different result
var human = {name: "Jack"};
var nextHuman = human;
human.name = "Howard";

console.log(human.name); // "Howard"
console.log(nextHuman.name); // "Howard"
// NOTE: because nextHuman is a reference to human, when human changes so will nextHuman

// Object properties have attributes: Configurable, Enumerable, Writable  

// In JS everything is an object
// Functions are also objects
// Below a variable Person is created and assigned a pointer to a function
// This is a constructor function, commonly used to create 'classes' and objects of that 'class'
var Person = function(name){
    this.name = name;
};
// Creating object of Person 'class'
// Code below creates a new variable Kelly.
// On the right, the new keyword is used with Person (pointer to a function)
/* When new is called with a function, the function creates a new object ('this' in the func references this object)
and returns it */
/* Therefore, on right, a new object is created, 
"Kelly" is assigned to its name proeprty, 
it is returned, 
then assigned to Kelly (variable) */
var Kelly = new Person("Kelly");

/* Statement above is SAME as:
var Kelly = new function(name){
    this.name = name;
};

AND 

var Kelly = function(name){
    this.name = name;
    return this;
};
*/

// Prototypes 
// TWO THINGS: prototype property and prototype attribute
// 1. PROPERTY
// Every function has a prototype property (empty by default)
// Properties and methods attached to this property to implement inheritance
function PrintStuff (myDocuments) {
​   this.documents = myDocuments;
}
​
​// We add the print () method to PrintStuff prototype property so that other instances (objects) can inherit it:​
PrintStuff.prototype.print = function () {
console.log(this.documents);
}

/* NOTE: Objects that inherit from another object's prototype also inherit the constructor.
Constructors are functions which instantiate an object when called with the 'new' keyword. */
​
​// Create a new object with the PrintStuff () constructor, thus allowing this new object to inherit PrintStuff's properties and methods.​
​var newObj = new PrintStuff ("I am a new Object and I can print.");
​
​// newObj inherited all the properties and methods, including the print method, from the PrintStuff function. Now newObj can call print directly, even though we never created a print () method on it.​
newObj.print (); //I am a new Object and I can print.

// 2. ATTRIBUTE
// Characteristic of the object, tells object's 'parent' (the object it inherited FROM)
// Also called prototype object, set automatically when object created
// Prototype ATTRIBUTE of objects created using object literal
var circle = {
    radius: 5,
};
// and object()
var circle = new Object();
// is object.prototype, because they inherit from object.

/* Objects created with the new keyword/ any constructor other than the Object () constructor
get their prototype from the constructor function. */
function Account () {
​
}
​var userAccount = new Account () 
/* userAccount initialized with the Account () constructor 
and as such its prototype attribute (or prototype object) is Account.prototype. */