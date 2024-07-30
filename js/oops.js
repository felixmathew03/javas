class Animal{
    leg;
    teeth;
    constructor(l,t){
        this.leg=l;
        this.teeth=t;
    }
    hunt(){
        console.log("Animals hunt using their "+this.leg+" legs");
    }
    nonVeg(){
        console.log("Carnivorous animals");
    }

    veg(){
        console.log("Herbivorous animals");
    }
}
let fox=new Animal(4,"Sharp");
console.log( fox.leg,fox.teeth);
fox.hunt();