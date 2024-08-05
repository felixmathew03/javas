//promise

// const fetchData=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(true){
//                 resolve("Success") 
//             }
//             else{
//                 reject("Error")
//             }
//         },1000);
//     })
// }

// fetchData().then((dt)=>{console.log(dt);}).catch((dt)=>{console.log(dt);})


//promise chaining 

function fetchData(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    })
}

fetchData();