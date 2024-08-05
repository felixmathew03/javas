function fetchData(){
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        str=``;
        data.map((dt)=>{
            str+=`<div class="card">
                    <div class="head">
                        <div class="left">
                            <img src="${dt.thumbnailUrl}" alt="" id="img1">
                        </div>
                        <div class="right">
                            <h1>${dt.title}</h1>
                        </div>
                    </div>
                    <div class="cont">
                        <img src="${dt.url}" alt="" id="img2">
                    </div>
                </div>`
        })
        document.getElementById("list").innerHTML=str;
    })
    .catch((error)=>{
        console.log(error);
    })
}