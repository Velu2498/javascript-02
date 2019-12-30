
// var a=document.getElementById("nam").value
// var b=document.getElementById("age").value
// document.getElementById("tbody").innerHTML+="<tr><td>" +a +"</td>" +"<td>"+ b + "</td>" +"</tr>"

function add(){
var a=document.getElementById("nam").value
var b=document.getElementById("age").value
var c=document.getElementById("con").value
var d=document.getElementById("st").value
var e=document.getElementById("cty").value
var skill=[]
document.getElementsByName("skills[]").forEach( function (elem){
    console.log(elem.value)
 if(elem.checked){
     skill.push(elem.value)
 }
})
var f=document.querySelector('input[name="gender"]:checked').value
var g=document.querySelector('input[name="marr status"]:checked').value
var h=document.getElementById("abu").value

document.getElementById("tbody").innerHTML+="<tr><td>" +a +"</td>" +"<td>"+ b + "</td>" + "<td>"+ c + "</td>" + "<td>"+ d + "</td>" + "<td>"+ e + "</td>"+ "<td>"+ f + "</td>"+ "<td>"+ g + "</td>"+"<td>"+ skill + "</td>" +"<td>"+ h + "</td>" +"</tr>"
}











