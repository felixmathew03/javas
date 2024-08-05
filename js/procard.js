function fetchData(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        str=``;
        data.map((dt)=>{
            str+=`<div class="card">
                    <h3>${dt.title}</h3>
                    <p>${dt.body}</p>
                    <div id="foot"><i>${dt.id}</i></div>
                </div>`
        })
        document.getElementById("list").innerHTML=str;
    })
    .catch((error)=>{
        console.log(error);
    })
}
