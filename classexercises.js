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