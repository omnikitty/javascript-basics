/* Prototypal Inheritance
Javascript has prototypal inheritance, which means objects inherit from other objects.
There are NO CLASS DEFINITIONS. 
To the program, only the objects matter, not their scaffolding.
Classes are just metadata. The objects will work perfectly without them. 

Javascript natively uses prototypal inheritance. 
Traditional classical inheritance (like Java) is supported only to attract classical devs.
Also, JS supports both object oriented and functional programming.
They don't mix well, but prototypal inheritance bridges the gap. 
*/

// Objects inherit from objects, no Classes
// Way #1 to create: ex nihilo 
var object = Object.create(null); // no prototype, clone of null

// Way #2 to create: cloning existing object
var rectangle = {
    area: function () {
        return this.width * this.height;
    }
};
var rect = Object.create(rectangle);

/* Above is an object literal, which creates 
a clone of Object.prototype and extends with properties/methods. 

Equivalent to:
var rectangle = Object.create(Object.prototype);

rectangle.area = function () {
    return this.width * this.height;
};
*/

/* HELPFUL NOTE: In both cases (ex nihilo and cloning), a scaffold/class is NEVER created.
An object that already exists is used to create more objects.
ONLY objects exist, no class declaration. */


// Extending with properties 

/* Clumsy way, need to add to every rect object 
rect.width = 5;
rect.height = 10;
alert(rect.area());
*/
// Better way: prototypal pattern (USE THIS)
var rectangle = {
    create: function (width, height) {
        var self = Object.create(this);
        self.height = height;
        self.width = width;
        return self;
    },
    area: function () {
       return this.width * this.height;
    }
};

var rect = rectangle.create(5, 10);

// Another way: constructor pattern (SAME)
function Rectangle(width, height) {
    this.height = height;
    this.width = width;
}
 
Rectangle.prototype.area = function () {
    return this.width * this.height;
};

var rect = new Rectangle(5, 10);

// Better prototypal way to create inheritance: Object.extend method (SAME)
var square = rectangle.extend({
    create: function (side) {
        return rectangle.create.call(this, side, side);
    }
});

var sq = square.create(5);
 
// Best way to do prototypal inheritance
var rectangle = {
    create: function (width, height) {
        return this.extend({ // 'this' is Object
            height: height,
            width: width
        });
        },
    area: function () {
        return this.width * this.height;
    }
};
 
var rect = rectangle.create(5, 10);

// Two ways to implement prototypal inheritance: delegation and concatenation
// Delegation is the method whereby an object maintains a list of pointers to objects it differs from. 
// 