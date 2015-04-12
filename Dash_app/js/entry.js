// TO DO
// -- make data store module
// -- create communication between module

var bar = new module("bar", function(x){console.log("x")});
bar.push();
var foo = new module("foo", function(x){console.log("worked");});
foo.push();

globalModules.run();