//create div using java script
var i=document.createElement("input")
i.setAttribute("type","number")
document.body.appendChild(i)


//count
var count=0
function call(){
    var i=document.createElement("div")
    var c=document.createElement("div")
    i.innerHTML="hellow"+"  "+ count; 
    i.setAttribute("style","color:blue")
    c.innerHTML=count
    i.setAttribute("style","color:blue")
    document.body.appendChild(i)
    document.body.appendChild(c)
    // document.body.appendChild(i)
    count++    
}




//evev red
for(i=0;i<101;i++){
    var o=document.createElement("div")
    o.innerHTML=i
    if(i%2==0){
        o.setAttribute("style","color:red")
    }
    document.body.appendChild(o)

}


