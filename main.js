class Person {
	constructor(name,age,happiness) {
		this.name= name;
		this.age= age;
		this.happiness= happiness;
	}

info() {
	console.log("People: " + this.name + " Age: " + this.age);
}
}
var alex= new Person("Alex",45,true);
var bob= new Person("Bob",24,false);
console.log(alex.name);
alex.info();
bob.info();
