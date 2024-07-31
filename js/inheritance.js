//Single inheritance
class Father{
    drive(){
        console.log("He can Drive...");
    }
}

class Child extends Father{
    programmer(){
        console.log("He is a Programmer...");
    }
}

mahesh = new Father();
mahesh.drive();

suresh = new Child();
suresh.drive();
suresh.programmer();

//Constructor in inheritance
class Bike{
    constructor(company){
        this.company=company;
    }
}
class Vehicle extends Bike{
    constructor(com,name,price){
        super(com);
        this.name=name;
        this.price=price;
    }
}
v=new Vehicle("Honda","Shine",100000);
document.write(`${v.company}  ${v.name}  ${v.price}`);

//Multilevel inheritance
class A{
    asd(){
        console.log("This is class A");
    }
}
class B extends A{
    bsd(){
        console.log("This is class B");
    }
}
class C extends B{
    csd(){
        console.log("This is class C");
    }
}
c = new C();
c.asd();
c.bsd();
c.csd();

//Heirarchical inheritance
class Department{
    dep(){
        console.log("Commerce department");
    }
}
class Staff extends Department{
    staff(){
        console.log("Staff");
    }
}
class Student extends Department{
    std(){
        console.log("Student");
    }
}
sa=new Staff();
sa.dep();
sa.staff();

su=new Student();
su.dep();
su.std();