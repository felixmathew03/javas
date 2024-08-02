function orderFood(callback){
    setTimeout(()=>{
        console.log("Food ordered");
        callback();
    },1000)
}

function decorateVenue(callback){
    setTimeout(() => {
        console.log("Venue decorated");
        callback();
    }, 1000);
}

function arrangeDJ(callback){
    setTimeout(() => {
        console.log("DJ arranged");
        callback();
    }, 1000);
}

orderFood(()=>{
    decorateVenue(()=>{
        arrangeDJ(()=>{
            console.log("All programs done");
        })
    })
})