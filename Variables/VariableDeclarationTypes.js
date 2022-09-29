var a = 10
var a = 20       // Re-declaration is possible for var
console.log(a); // Re-intialization is possible for var

let b = 15
//let b            // SyntaxError: Identifier 'b' has already been declared
b = 34
console.log(b);   

const c = 45
//const c         // Re-declaration is not possible
c = 56             // TypeError : Assignment to constant variable 
console.log(c);