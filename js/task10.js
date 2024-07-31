a=[]
function add(){
    a.push(document.getElementById("inp").value);
    display();
}
function display() {
    const data=document.createElement("li");
    a.map((item)=>{ 
        data.innerHTML=`${item}  <button onclick='delet("${item}")'>DELETE</button>`;
        document.getElementById("dis").appendChild(data);
    })
}
function delet(d){
    document.getElementById("re").textContent=`After Deleting`;
    a.splice(a.indexOf(d),1);
    displays();
}
function displays() {
    a.map((item1)=>{
        const data1=document.createElement("li");
        data1.innerHTML=`${item1}`;
        document.getElementById("diss").appendChild(data1);
    })
}