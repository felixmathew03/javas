function putZero(time){
    return time<10?"0"+time:time;
}

function  timer(){
    
    
    let date= new Date();

    let hours= date.getHours();
    ampm=hours<12?"AM":"PM";


    if(hours<=18 && hours>=6){
        document.getElementById("head").style.backgroundImage='url("./img/silhouette-leafless-trees-near-water-with-sun-shining-through-branches.jpg")';
        document.getElementById("head").style.backgroundSize = 'cover';
        document.getElementById("timer").style.backgroundColor='rgba(244, 193, 132, 0.779)';
    }
    else{
        document.getElementById("head").style.backgroundImage='url("./img/beautiful-view-sunset-with-purple-clouds-beach.jpg")';
        document.getElementById("head").style.backgroundSize = 'cover';
        document.getElementById("timer").style.backgroundColor='rgba(28, 8, 143, 0.395)';
        document.getElementById("timer").style.color= 'aliceblue';
    }
    
    document.getElementById("tm1").textContent=`${putZero(hours%12==0?hours:hours%12)}`;
    document.getElementById("tm2").textContent=`${putZero(date.getMinutes())}`;
    document.getElementById("tm3").textContent=`${putZero(date.getSeconds())}   ${ampm}`;


    setTimeout(() => {
        timer();
    }, 1000);
}

timer();    