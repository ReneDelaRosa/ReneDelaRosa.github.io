function Foo(){
  this.nombre="foo";
  this.uno=1;
  this.dos=2;
}

function Bar(){
  this.dos="dos";
  this.tres=3
}

Bar.prototype=new Foo();

var foo=new Foo();
var bar=new Bar();

console.log(bar.uno);
console.log(bar.tres);
console.log(bar.dos);
console.log(bar.nombre);
console.log(foo.nombre);
