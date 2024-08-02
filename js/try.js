console.log("start");
try {
    num=1;
    num.toPrecision(500);
    
} catch (error) {
    console.log("precision 500 out of range");
}
console.log("end");