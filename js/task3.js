a=[];
while (true) {
    choice=prompt("1 -> Add data \n2 -> Display data \n3 -> Edit data \n4 -> Delete data \n5 - > Exit \nEnter your choice\n");
    if (choice==1) {
        data=prompt("Add task");
        
        a.push(data);
    }
    else if(choice==2){
        // alert(a)
        str=``
        for(i=0;i<a.length;i++){
            str+=`[${i+1}]   ${a[i]} \n`    
        }
        alert(str)
    }
    else if(choice==3){
        str=``
        for(i=0;i<a.length;i++){
            str+=`[${i+1}]   ${a[i]} \n`    
        }
        ind=prompt(str+"Enter option");
        inp=prompt("Enter the content");
        a[ind-1]=inp;
        alert("suuccesfuly edited")
    }
    else if(choice==4){
        str=``
        for(i=0;i<a.length;i++){
            str+=`[${i+1}]   ${a[i]} \n`    
        }
        ded=prompt(str+"Enter option");
        a.splice(a.indexOf(ded-1),1);
    }
    else if(choice==5){
        break;
    }
    else{
        alert("Invalid Choice")
    }
}
