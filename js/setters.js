class Button{
    constructor(name){
            this.button=document.createElement("button")
            this.button.textContent=name;
            document.body.appendChild(this.button)
    }
    set width(width){
        this.button.style.width=width+"px";
    }
    set height(height){
        this.button.style.height=height+"px";
    }
    get width(){
        return parseInt(this.button.style.width);
    }
    get height(){
        return parseInt(this.button.style.height);
    }
}
let btn1=new Button("Click Me!");
btn1.width=500;
btn1.height=250;
console.log(btn1.height,btn1.width)
