
// Types in javascript (aka ECMAscript)

// Numbers
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

// Strings
// can be used like objects too
'hello'.charAt(0); // "h"
'hello, world'.replace('hello', 'goodbye'); // "goodbye, world"
'hello'.toUpperCase(); // "HELLO"

Boolean('' && false && 0 && NaN && null && undefined); // all falsy
// everything else is truthy!!