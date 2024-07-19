a=[{name:"felix",age:20,marks:10,sub:"MERN"},{name:"felxi",age:20,marks:10,sub:"MERN"},{name:"pochinki",age:20,marks:10,sub:"MERN"}]
console.log(a);
str=JSON.stringify(a);
console.log(str);
obj=JSON.parse(str);
console.log(obj);

console.log(a[2].name);
console.log("name "+a[0].name);