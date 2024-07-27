var a=[];

function addList(){
    a.push(document.getElementById("in").value);
    display();
}
function display(){
    const data=document.createElement("li");
    for (let i in a) {
        data.innerHTML=`${a[i]} <button onclick="del('${a[i]}')">Delete</button>`;
        document.getElementById("list").appendChild(data);
    }
    
}

function displays(){
    const data2=document.createElement("h2");
    data2.textContent=`After Deleting`;
    document.getElementById("lists").appendChild(data2);
    for (let i=0;i<a.length;i++) {
        const data1=document.createElement("li");
        data1.textContent=`${a[i]}`;
        document.getElementById("lists").appendChild(data1);
    }
}
function del(b){
    console.log(b);
    a.splice(a.indexOf(b),1);
    displays();
}