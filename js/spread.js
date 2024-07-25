//array spread 
a=[1,2,3,4,5,6];
b=[...a]

b[0]=5
console.log(`From a = ${a}`);
console.log(`From b = ${b}`);

//object spread
p={name:"alan",age:20};
q={...p}
q.name="sam"
console.log(p);
console.log(q);