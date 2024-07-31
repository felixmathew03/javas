// console.log(this);

//******************************************* 
// function getName(){
//     console.log(this);
// }
// getName();

//******************************************* 
// const person={
//     name:"Syneffo",
//     location:"Kochi",
//     getName(){
//         console.log(this.name);
//         console.log(this.location);
//     }
// }
// person.getName();

//******************************************* 
// function getName(){
//     console.log(this.name);
//     console.log(this.location);
// }
// const person1={
//     name:"Syneffo",
//     location:"Kochi",  
//     method:getName,
// }
// const person2={
//     name:"Novavi",
//     location:"Kochi",  
//     method:getName,
// }
// person1.method();
// person2.method();

//******************************************* 
function getName(p,q,r){
    console.log(p,q,r);
    console.log(this.name);
    console.log(this.location);
}
function gettName(){
    console.log(this.name);
    console.log(this.location);
}
const person1={
    name:"Syneffo",
    location:"Kochi",  
}
const person2={
    name:"Novavi",
    location:"Kochi",  
}
getName.call(person1,1,2,3);
getName.apply(person2,[6,7,8]);
const newName=gettName.bind(person1);
newName();

//******************************************* 
const person={
    name:"Syneffo1",
    location:"Kochi1",  
    method(){
        return function getName(){
            return this;
        }
    }
}
x=person.method();
console.log(x());