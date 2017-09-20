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