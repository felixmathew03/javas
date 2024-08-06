async function fetchData(){
    try {
        const res=await fetch("https://jsonplaceholder.typicode.com/todos")
        const todos=await res.json();
        console.log(todos);
        str=``;
        todos.map((todo)=>{
            str+=`<tr>
                    <td>${todo.id}</td>
                    <td>${todo.title}</td>
                    <td>${todo.completed?'<span class="cmp">Completed</span>':'<span class="ncmp">Not completed</span>'}</td>
                </tr>`
        })
        document.getElementById("tbody").innerHTML=str;
    } catch (error) {
        console.log(error);
    }
}