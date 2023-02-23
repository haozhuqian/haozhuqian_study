var arguments = [1,2,3]
var curried = [].slice.call( arguments, 1 );
curried.concat(arguments) 
console.log(curried.concat(arguments) )