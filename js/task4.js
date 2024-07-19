a=[];
while (true) {
    choice=prompt("1 -> Add data \n2 -> Display data \n3 -> Edit data \n4 -> Delete data \n5 - > Exit \nEnter your choice\n");
    if (choice==1) {
        data1=prompt("Add Name");
        data2=prompt("Add Phone number");
        a.push({name:data1,phn:data2});
        
    }

    else if(choice==2){
        // alert(a)
        str=``
        for(i=0;i<a.length;i++){
            str+=`${i+1}.   Name: ${a[i].name}  Phone No.: ${a[i].phn}\n`
            // console.log("name "+a[0].name); 
            // str+='\n Name '+a[i].name+'Phone Number '+a[i].phn+'\n';

        }
        alert(str)
    }
    else if(choice==3){
        str=``
        for(i=0;i<a.length;i++){
            str+=`${i+1}.\tName: Name:${a[i].name}\tPhone No.${a[i].phn}\n`    
        }
        ind=prompt(str+"Enter index number");
        inp1=prompt("Enter the name");
        inp2=prompt("Enter the phone no.");
        a[ind-1].name=inp1;
        a[ind-1].phn=inp2;
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
