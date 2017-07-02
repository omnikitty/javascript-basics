/* Objects

Variables are containers for data values.
Objects are also variables that can contain many values.
Information stored as name:value pairs (properties).
Methods are functions stored as object propeties.
*/

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

// 'class' declaration of an object
// since it's a function, 
// CAP name to distinguish as constructor func
function Computer(name, cpu, ram) {
	this.name = name;
	this.cpu = cpu;
	this.ram = ram;
}
// adding method to the prototype of the object
// when called, the compiler will travel up the object's
// prototype chain until it finds the function
Computer.prototype.describe = function () {
	console.log('I am a ' + Computer.name + ' with CPU: '
		+ this.cpu + ' and RAM ' + this.ram);
}
// creating a new object
// 'new' keyword actually 
// 1. creates a new empty object
// 2. calls constructor.apply() with that object
// as the 'this' instance (first arg)
// and the 'new' keyword args as the following args
let pi = new Computer('raspberry', 'arm', 2096);

/* Inheritance 
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
*/

// another object declaration
function Supercomputer(name, cpu, ram, cores) {
	Computer.call(this, name, cpu, ram);
	this.cores = cores;
}
// setting prototype to equal instance of Computer
// this means new class inherits from Computer
Supercomputer.prototype = Object.create(Computer.prototype);
// but this also sets constructor to equal Computer's
// set constructor of new class correctly
Supercomputer.prototype.constructor = Supercomputer;
// adding function to new class, uses inherited props
Supercomputer.prototype.describe = function() {
	console.log('Using supercomputer ' + Computer.name + ' with CPU: '
		+ this.cpu + ' and RAM ' + this.ram);
}