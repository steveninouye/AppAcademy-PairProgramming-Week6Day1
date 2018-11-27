Function.prototype.inherit = function(parent) {
    function Surrogate () {}
    Surrogate.prototype = parent.prototype;
    this.prototype = new Surrogate;
    this.prototype.constructor = this
}

function Animal(name) {
    this.name = name;
}

Animal.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}!`)
}

let animal = new Animal("Sam");

function Dog(name){
    this.name = name
}

Dog.inherit(Animal);

Function.prototype.inherit = function (parent) {
    this.prototype = Object.create(parent.prototype)
    this.prototype.constructor = this;
}

function Animal(name) {
    this.name = name;
}

Animal.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}!`)
}

let animal = new Animal("Sam");

function Dog(name) {
    this.name = name
}

Dog.inherit(Animal);

let dog = new Dog('Rover');
dog.sayHello();