let a = 6; 
let b = 9; 
function simpleTag(strings, aValExpression, bValExpression, sumExpression) { 
 console.log(strings); 
 console.log(aValExpression); 
 console.log(bValExpression); 
 console.log(sumExpression); 
 return 'foobar'; 
} 
let taggedResult = simpleTag`${ a } + ${ b } = ${ a + b }`; 
// ["", " + ", " = ", ""] 
// 6 
// 9 
// 15 
console.log(taggedResult); // "foobar"