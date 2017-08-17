"use strict";
// Explicitly set `this` type
function fooFunction() {
    console.log(this.name);
}
var myItem = { name: 'test' };
fooFunction.apply(myItem);
// OK
let a = { name: 'test' };
// Error
let b = { name: 'test' };
// OK
let c = { name: 'test', id: '123' };
