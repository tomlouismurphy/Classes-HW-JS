const Pet {
	constructor(name){
		this.name = name;
		this.owner = '';
	}
	setOwner(petOwner){
		return this.owner = petOwner
	}
}