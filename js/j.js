class Cinema{
    constructor(name,genre){
        this.name=name;
        this.genre=genre;
    }
    pooja(){
        console.log(`The cinema ${this.name} of genre ${this.genre}, started shooting...`);
    }
    packUp(){
        console.log(`The cinema ${this.name} of genre ${this.genre}, completed shooting...`);
    }
}
let c1 = new Cinema("Pulimurugan","Action");
c1.pooja();
c1.packUp();