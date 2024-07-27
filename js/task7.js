str="";
flag=0;
function countVowel(){
    str=document.getElementById("in").value;
    ar=str.split("");
    for(let i in ar){
        if(ar[i]=="a" || ar[i]=="e" || ar[i]=="i" || ar[i]=="o" || ar[i]=="u"){
            flag++;
        }
    }   
    document.getElementById("no").textContent=`No. of vowels is ${flag}`;
}