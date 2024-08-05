function fetchData(){
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        str=``;
        data.map((dt)=>{
            str+=`<div class="card">
                    <h5>${dt.id}</h5>
                    <h4>User ID :${dt.userId}</h4>
                    <h2>${dt.title}</h2>
                </div>`
        })
        document.getElementById("list").innerHTML=str;
    })
    .catch((error)=>{
        console.log(error);
    })
}