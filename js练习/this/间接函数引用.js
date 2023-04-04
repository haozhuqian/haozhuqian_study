var name = 'window';
var person = {
  name:'person',
  say(){
    console.log(this.name);
  }
};
(function(){
  var say = person.say;
  say();// window
  person.say();// person
  (person.say)();// person
  (b = person.say)();// window
}());