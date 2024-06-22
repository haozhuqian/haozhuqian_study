"use strict"; 
function foo(x) { 
 if (x <= 1) return 1; 
 return (x / 2) + foo( x - 1 ); 
} 
foo( 123456 );