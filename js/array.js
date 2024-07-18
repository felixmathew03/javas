// a=[1,2,3,"hai","hello","good",true,false];
// console.log(a);
// console.log(a[5]);
// console.log(a.length);
// console.log(a.indexOf("good"));
// a.push("mern");  //add data at end of the array
// console.log(a);
//  a.pop();    //delete data from end of array
//  console.log(a);
// a.shift();   //delete data from beginning of array
// console.log(a);
// a.splice(a.indexOf(3),1);    //delete a particular index element
// console.log(a);
// console.log(a.toString());
// console.log(a.reverse());
// console.log(a.join(" "));

// j=0;
// for(i=1;i<=100;i++){
//     if()
// }
var a=[];

for(let i=1;i<=100;i++){
        if(i%3==0 && i%5==0){
            a.push("fizz buzz");
        }
        else if(i%3==0){
            a.push("fizz");
        }
        else if(i%5==0){
            a.push("buzz");
        }
        else{
            a.push(i);
        }
}
    
console.log(a);