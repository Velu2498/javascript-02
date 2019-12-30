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
        elem = jsonel[0]
        y = []
        Object.keys(elem).forEach(function (ky) {
            y.push(ky)
        })
        for (i = 0; i < y.length; i++) {
            console.log(y[i])
            var th = document.createElement("th");
            th.innerHTML = y[i]
            document.getElementById("tr").appendChild(th)
        }
    }
}

//open the requeried file
json.open("GET", "https://5cdd0a92b22718001417c19d.mockapi.io/api/users", true);
//send the file
json.send();

window.onscroll = fu(0);

//fuction on onclick
function fu(i) {

    var main = document.getElementById("main");
    var conHt = main.offsetHeight
    var yoff = window.pageYOffset
    var y = yoff + window.innerHeight

    console.log(y,conHt)

    //clear the previous values in the table
    // var Table = document.getElementById("tbody");
    // Table.innerHTML = ""

    //formula to find start and end 
    // e = (i * 5) + 5
    // s = e - 5
    // console.log(i,s,e)

    if (y >= conHt) {

        for (j = 0; j < 5; j++) {
            var tr = document.createElement("tr");//creating the tr in tbody
            //values 
            elem = jsonel[j]
            y = []
            Object.values(elem).forEach(function (ky) {
                y.push(ky)
            })
            for (i = 0; i < y.length; i++) {
                var td = document.createElement("td");
                td.innerHTML = y[i]
                tr.appendChild(td)
            }
            //appending the tr to tbody
            document.getElementById("tbody").appendChild(tr)
        }
    }


}