var c=0;
class car{
    //property(variables)
    modname;
    color;
    noseat;
    nogear;

    //methods(functions)
    constructor(name){
        this.modname=name;
        console.log(this.modname)
        let i=document.createElement("img");
        if(c%2==0){
        i.setAttribute("src","parking.svg")}
        else{
        i.setAttribute("src","racing.svg") 
        }
        i.style.width="50px";
        document.body.appendChild(i)
        c++
    }

    startcar(){
         console.log("vommm...................")
    }
    stopcar(){
        console.log("rest")
    }    
}

//create fun to call class
let car1= () => {
    let c=new car("Audi r8");
    c.startcar()
}