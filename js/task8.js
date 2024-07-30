class Mark{
    constructor(p,q,r){
        this.phy=p;
        this.mat=q;
        this.chem=r
        this.mark=document.createElement("div")
        this.mark.innerHTML=`<h2>Marks</h2><h4>Physics : ${this.phy}</h4><h4>Maths : ${this.mat}</h4><h4>Chemistry : ${this.chem}</h4>`;
        document.body.appendChild(this.mark);
    }
    find(){
        let avg=(this.chem+this.mat+this.phy)/30;
        this.cg=document.createElement("div")
        this.cg.innerHTML=`<h2>CGPA: ${avg}</h2>`;
        document.body.appendChild(this.cg);
    }
}

let m1=new Mark(67,78,45);
m1.find();