// json = new XMLHttpRequest();
// json.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {

//         // document.getElementById("tbody").innerHTML = this.responseText;

//         jsonel = JSON.parse(this.responseText);
//         a = jsonel.length;
//         a = a / 5;
        
//         var ul = document.createElement("ul");
//         for (i = 0; i < a; i++) {
//             var li = document.createElement("li");
//             li.innerHTML = i + 1;
//             li.setAttribute("onclick", "fu(" + i + ")")
//             ul.appendChild(li)
//         }
//         document.body.appendChild(ul)

      
//     };
// }
// json.open("GET", "https://5cdd0a92b22718001417c19d.mockapi.io/api/users", true);
// json.send();

// function fu(i) {
//     var Table = document.getElementById("tbody");
//     Table.innerHTML = ""
//     var e = (i * 5) + 5
//     var s = e - 5
//     for (j = s; j < e; j++) {
//         document.getElementById("tbody").innerHTML += "<tr><td>" + jsonel[j].id +"</td>"+"<td>"+jsonel[j].realm+"</td>"+"<td>"+jsonel[j].username+"</td>"+"<td>"+jsonel[j].password+"</td>"+"<td>"+jsonel[j].email+"</td>"+"<td>"+jsonel[j].emailVerified+"</td>"+"<td>"+jsonel[j].countryId+"</td></tr>"
//         console.log(j)
//     }

// }


var ul = document.createElement("ul");
        for (i = 0; i < 20; i++) {
            var li = document.createElement("li");
            li.innerHTML = i + 1;
            li.setAttribute("onclick", "fu(" + i + ")")
            ul.appendChild(li)
        }
        document.body.appendChild(ul)


function fu(i) {
    k=i+1

    var Table = document.getElementById("tbody");
        Table.innerHTML = ""

    json = new XMLHttpRequest();
    json.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("tbody").innerHTML = this.responseText;
            jsonel = JSON.parse(this.responseText);
            for (j = 0; j < 5; j++) {
                        document.getElementById("tbody").innerHTML += "<tr><td>" + jsonel[j].id +"</td>"+"<td>"+jsonel[j].realm+"</td>"+"<td>"+jsonel[j].username+"</td>"+"<td>"+jsonel[j].password+"</td>"+"<td>"+jsonel[j].email+"</td>"+"<td>"+jsonel[j].emailVerified+"</td>"+"<td>"+jsonel[j].countryId+"</td></tr>"
                        console.log(j)
                    }

        }
    }

json.open("GET","https://5cdd0a92b22718001417c19d.mockapi.io/api/users?page="+k+"&limit=5", true);
json.send();

}
