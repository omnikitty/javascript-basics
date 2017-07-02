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

/* Inheritance */
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance

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