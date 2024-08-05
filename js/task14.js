function fetchData(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        str=``;
        data.map((dt)=>{
            console.log(dt.zipcode);
            str+=`<div class="card">
                    <h5><i>${dt.id}</i></h5>
                    <h3>${dt.name}</h3>
                    <p>Username: ${dt.username}</p>
                    <p>Email: ${dt.email}</p>
                    <div class="add">
                        <h4>Address</h4>
                        <p>Street: ${dt.address.street}</p>
                        <p>Suite: ${dt.address.suite}</p>
                        <p>City: ${dt.address.city}</p>
                        <p>Zipcode:${dt.address.zipcode}</p>
                        <p>lat: ${dt.address.geo.lat}  lon: ${dt.address.geo.lng}</p>
                    </div>
                    <p>Phone: ${dt.phone}</p>
                    <p>Website: ${dt.website}</p>
                    <div class="comp">
                        <h4>Company</h4>
                        <p>${dt.company.name}</p>
                        <p>${dt.company.catchPhrase}</p>
                        <p>${dt.company.bs}</p>
                    </div>
                </div>`
        })
        document.getElementById("list").innerHTML=str;
    })
    .catch((error)=>{
        console.log(error);
    })
}