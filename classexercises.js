class Pet {
	constructor(name){
		this.name = name;
		this.owner = '';
	}
	setOwner(petOwner){
		return this.owner = petOwner
	}
}

class Dog extends Pet {
	constructor(name, price){
		super(name);
		this.price = price;
	}
	bark(){
		console.log('bark');
	}
	chaseTail(){
		console.log('oh boy oh boy oh boy');
	}
	getPrice(){
		return this.price;
	}
}

const doggy = new Dog('Sparky', 250);

class Cat extends Pet {
		constructor(name, price){
		super(name);
		this.price = price;
	}
	purr(){
		console.log('purrrrr');
	}
	clean(){
		console.log('cleaning');
	}
	getPrice(){
		return this.price;
	}
}

const kitty = new Cat('Sprinkles', 200);

class Person {
	constructor(name){
		this.name = name;
		this.age = 0;
		this.weight = 0;
		this.mood = 0;
		this.pets = [];
		this.bankAccount = 0;
	}
	getName(){
		return this.name;
	}
	getAge(){
		return this.age;
	}
	getWeight(){
		return this.weight;
	}
	greet(other_person){
		console.log('Hi ' + other_person);
	}
	eat(){
		this.weight += 1;
		this.mood += 1;
	}
	exercise(){
		this.weight -= 1;
	}
	growOld(){
		this.age += 1;
		this.weight += 5;
		this.mood -= 5;
		this.bankAccount += 10;
	}
	buyPet(pet){
		this.pets.push(pet);
		this.mood += 10;
		this.bankAccount -= pet.price;
	}
}

const lady = new Person('Jill');

//Factory Problems

class Shoe {
	constructor(brand, serialNumber){
		this.brand = brand;
		this.serialNumber = serialNumber;
	}
}

class Factory {
	constructor(brand){
		this.brand = brand;
		this.shoes = [];
	}
	produceShoe(){
		const newShoe = new Shoe(this.brand, this.shoes.length);
		this.shoes.push(newShoe);
		return newShoe;
	}
	findCar(index){
		return this.shoe[index];
	}
}

const kick = new Factory('Nike');

class Store {
	constructor(mallName, serialNumber){
		this.mallName = mallName;
		this.serialNumber = serialNumber;
	}
}

class Mall {
	constructor(mallName){
		this.mallName = mallName;
		this.stores = [];
	}
	generateStore(){
		const newStore = new Store(this.mallName, this.stores.length);
		this.stores.push(newStore);
		return newStore;
	}
}