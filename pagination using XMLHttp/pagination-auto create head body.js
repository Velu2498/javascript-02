// arr=[
//     {
//       "id": "1",
//       "name": "Lura Senger",
//       "email": "Xander_Collier@yahoo.com"
//     }
// ]

// y=[]
// arr.forEach(elem => {
// Object.keys(elem).forEach(function(ky){ 
//     y.push(ky) 
//  })
// });
// console.log(y)
// for(i=0;i<y.length;i++){
//     console.log(y[i])
// var th = document.createElement("th");
//  th.innerHTML=y[i]
//  document.getElementById("tr").appendChild(th)
// }



//creating request to server
json = new XMLHttpRequest();
//readystate
json.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {
        //convert into json
        jsonel = JSON.parse(this.responseText);
        a = jsonel.length;
        a = a / 5;
        //creating thr tablerow by json keys
        elem=jsonel[0]
        y=[]
        Object.keys(elem).forEach(function(ky){ 
            y.push(ky) 
         })
        for(i=0;i<y.length;i++){
            console.log(y[i])
        var th = document.createElement("th");
         th.innerHTML=y[i]
         document.getElementById("tr").appendChild(th)
        }
        //creating the list
        var ul = document.createElement("ul");
        for (i = 0; i < a; i++) {
            var li = document.createElement("li");
            li.innerHTML = i + 1;
            li.setAttribute("onclick", "fu(" + i + ")")
            ul.appendChild(li)
        }
        document.body.appendChild(ul)    
    }
}

//open the requeried file
json.open("GET", "https://5cdd0a92b22718001417c19d.mockapi.io/api/users", true);
//send the file
json.send();

//fuction on onclick
function fu(i) {
    //clear the previous values in the table
    var Table = document.getElementById("tbody");
    Table.innerHTML = ""
    //formula to find start and end 
    var e = (i * 5) + 5
    var s = e - 5

    for (j = s; j < e; j++) {
        var tr = document.createElement("tr");//creating the tr in tbody
        //values 
        elem=jsonel[j] 
        y=[]
        Object.values(elem).forEach(function(ky){ 
            y.push(ky) 
         })
        for(i=0;i<y.length;i++){
            var td = document.createElement("td");
            td.innerHTML = y[i]
            tr.appendChild(td)
        }
        //appending the tr to tbody
        document.getElementById("tbody").appendChild(tr)
    }
}