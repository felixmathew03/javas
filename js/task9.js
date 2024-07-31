std1={name:"Mohanlal", cls:"10th",mark:89,};
std2={name:"Mammotty", cls:"12th",mark:86,};
std3={name:"Shobhana", cls:"9th",mark:80,};
std4={name:"Suresh", cls:"10th",mark:85,};
std5={name:"Kavya", cls:"8th",mark:75,};
function details(){
    console.log(`the student named ${this.name}, of ${this.cls} class, has scored ${this.mark} marks..`);
}
details.call(std1);
details.call(std2);
details.call(std3);
details.call(std4);
details.call(std5);