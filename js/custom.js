// console.log("1-10 numbers using while loop");

// let i=1;

// while(i<=10){
//     console.log(i);
//     i++;
// }
// console.log("Even numbers between 1-10 using for loop");
// for(let i=1;i<=10;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// console.log("Odd numbers between 1-10 using do-while");
// let j=1;
// do{
//     if(j%2!=0){
//         console.log(j);
//     }
//     j++;
// }while(j<=10);

// console.log("Sum of first 10 numbers");
// let sum=0;
// for(let i=1;i<=10;i++){
//     sum+=i;
    
// }
// console.log("Sum is "+sum);

console.log("Fibonacci Series");
let a=0;
let b=1;
let c;
console.log(a);
console.log(b);
for(let i=1;i<=10;i++){
    c=a+b;
    a=b;
    b=c;
    console.log(a);
    console.log(b);   
}