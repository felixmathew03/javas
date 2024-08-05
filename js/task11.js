function fetchData(){
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        str=`<h2>Comments</h2>`;
        data.map((dt)=>{
            str+=`<div class="card">
                    <div id="head"><i>${dt.id}</i></div>
                    <h3>${dt.name}</h3>
                    <div class="content">
                    <h5>${dt.email}</h5>
                    <h4>:</h4>
                    <p> ${dt.body}</p>
                    </div>
                </div>`
        })
        document.getElementById("list").innerHTML=str;
    })
    .catch((error)=>{
        console.log(error);
    })
}
