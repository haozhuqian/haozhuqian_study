function f(){
    getName =  function(){
        console.log(1);
    };
    return this;
}
f.getName = function(){
    console.log(2);
}
f.prototype.getName = function(){
    console.log(3);
}
function getName(){
    console.log(5);
}
var getName = function(){
    console.log(4);
}
f.getName();//2
getName();//4
console.log(f())
// f().getName();//1
// getName();//1
// new f.getName();//2
// new f().getName();//1
// new new f().getName();

