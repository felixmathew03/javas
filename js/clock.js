function putZero(time){
    return time<10?"0"+time:time;
}

function  timer(){
    let date= new Date();

    let hours= date.getHours();
    ampm=hours<12?"am":"pm";


    document.getElementById("timer").textContent=`${putZero(hours%12)}:${putZero(date.getMinutes())}  ${putZero(date.getSeconds())} ${ampm}`


    setTimeout(() => {
        timer();
    }, 1000);
}

timer();