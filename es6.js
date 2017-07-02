
// NEW FEATURES
// Arrow functions - similar to lamdas in C#, same this as surrounding code
  nums.forEach(v => {
    if (v % 5 === 0)
      fives.push(v);
  });
// Classes - they exist
  class SkinnedMesh extends THREE.Mesh {
    constructor(geometry, materials) {
      super(geometry, materials);
      this.idMatrix = SkinnedMesh.defaultMatrix();
      this.bones = [];
      this.boneMatrices = [];
    }
    update(camera) {
      super.update();
    }
  }
// Enhanced Object Literals 
  var obj = {
      // __proto__
      __proto__: theProtoObj,
      // Shorthand for ‘handler: handler’
      handler,
      // Methods
      toString() {
       // Super calls
       return "d " + super.toString();
      },
      // Computed (dynamic) property names
      [ 'prop_' + (() => 42)() ]: 42
  };

// Template strings - protect against injection attacks
  var name = "Bob", time = "today";
  `Hello ${name}, how are you ${time}?`

// Default param values 
  function f(x, y=12) {
    // y is 12 if not passed (or passed as undefined)
    return x + y;
  }
  f(3) == 15
  function f(x, y, z) {
    return x + y + z;
  }
  // Pass each elem of array as argument
  f(...[1,2,3]) == 6
  
// let and const - same same
  let x = "hello"
  
// Iterators
  let fibonacci = {
    [Symbol.iterator]() {
      let pre = 0, cur = 1;
      return {
        next() {
          [pre, cur] = [cur, pre + cur];
          return { done: false, value: cur }
        }
      }
    }
  }
  
  for (var n of fibonacci) {
    // truncate the sequence at 1000
    if (n > 1000)
      break;
    console.log(n);
  }

// Modules - implicitly async
  // lib/math.js
  export function sum(x, y) {
    return x + y;
  }
  export var pi = 3.141593;
  // app.js
  import * as math from "lib/math";
  alert("2π = " + math.sum(math.pi, math.pi));
  // otherApp.js
  import {sum, pi} from "lib/math";
  alert("2π = " + sum(pi, pi));

// Promises - they exist

/* ES 7 */
// Exponentiation 
  let squared = 3 ** 2; // 9
  
  let num = 3;
  num **= 2;
  console.log(num); // 9