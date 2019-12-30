// let con=(val:string)=>{
//     val.toUpperCase();
//     console.log(val)
// }
// con("hi")
/*
//class
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
*/
var car = /** @class */ (function () {
    //methods(functions)
    function car(name) {
        this.modname = name;
        // if(this.modname=="audi"){
        // console.log(this.modname)
        var i = document.createElement("img");
        i.setAttribute("src", "racing.svg");
        i.style.width = "50px";
        var m = 100;
        var mov = setInterval(function () {
            i.style.marginTop = m + "px";
            console.log(m);
            m += 20;
            if (m > 150) {
                clearInterval(mov);
            }
        }, 1000);
        document.body.appendChild(i);
    }
    // if(this.modname=="benz"){}
    // if(this.modname=="bmw"){}
    // }
    car.prototype.startcar = function () {
        console.log("vommm...................");
    };
    car.prototype.stopcar = function () {
        console.log("rest");
    };
    return car;
}());
var car1 = function () {
    var c = new car("audi");
    // c.startcar()
};
