// var DOB=new Date("04/02/1998")
// var curr_date=new Date()
// var date_deff=Math.abs(curr_date-DOB)
// var sec=Math.ceil(date_deff/(1000))
// var min=Math.ceil(sec/60)
// var hours=Math.ceil(min/60)
// var days=Math.ceil(hours/24)
// var years=Math.ceil(days/365)
// console.log(DOB)
// console.log(curr_date)
// console.log(date_deff)
// console.log(sec)

// console.log(min)
// console.log(hours)
// console.log(days)
// console.log(years)
	
var today = new Date("04/02/1998");
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
console.log(today,date)
console.log(date)
console.log(time)