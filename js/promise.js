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

// function fetchData(){
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
// }

// fetchData();


// fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>{
//     if(res.status==200)
//         return res.json()
//     else{
//         alert("data not found");
//     }
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     alert("network issue");
//     console.log(error);
// })
async function fetchData(){
    try{
        const res=await fetch("https://jsonplaceholder.typicode.com/todos");
        if(res.status!=200)
            return alert("api error");
        const data=await res.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
}
fetchData()