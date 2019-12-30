//free course tab
var click = document.getElementById("fc")
click.setAttribute("onclick", "fun()")
function fun() {
    click1.setAttribute("style","border-bottom:0px")
    click2.style.borderBottom=""
    click.style.borderBottom="3px solid #20fc8f"
//writing inner HTML
    document.getElementById("rc").innerHTML = ""
    document.getElementById("rc").innerHTML = `
    <div class="row rc1">
                    <!-- 1st course -->
                        <div class="col-xl-4 first" >
                            <div class="card" style="width: 23rem;">
                                <img src="b1p1.PNG" class="card-img-top img" alt="">
                            <div class="card-body">
                                  <h5 class="card-title">Deep Learning</h5>
                                  <img src="stars.PNG" class="card-img-top" alt="">
                                  <p class="card-text">...</p>
                                  <a href="#" class="card-link">Course Details</a>
                                  <a href="#" class="btn btn-success enroll" id="enroll" >Enroll</a>
                                  
                            </div>
                            </div>
                        </div>
                        <!-- 2nd course -->
                        <div class="col-xl-4 second">
                            <div class="card" style="width: 23rem;">
                                <img src="b1p2.PNG" class="card-img-top img" alt="">
                            <div class="card-body">
                                  <h5 class="card-title">C Programming</h5>
                                  <img src="stars.PNG" class="card-img-top" alt="">
                                  <p class="card-text">...</p>
                                  <a href="#" class="card-link">Course Details</a>
                                  <a href="#" class="btn btn-success enroll" id="enroll">Enroll</a>
                            </div>
                            </div>
                        </div>
                        <!-- 3rd course -->
                        <div class="col-xl-4 third">
                            <div class="card" style="width: 23rem;">
                                <img src="b1p3.PNG" class="card-img-top img" alt="">
                            <div class="card-body">
                                  <h5 class="card-title">C Plus Plus Programming</h5>
                                  <img src="stars.PNG" class="card-img-top" alt="">
                                  <p class="card-text">....</p>
                                  <a href="#" class="card-link">Course Details</a>
                                  <a href="#" class="btn btn-success enroll" id="enroll">Enroll</a>
                            </div>
                            </div>
                        </div>

                    </div>`
}

//course lib tab
var click1 = document.getElementById("cl")
click1.setAttribute("onclick", "funcl()")
function funcl() {
    window.location.reload()
    console.log(localStorage)
}

//enroll courses1
var enroll1 = document.getElementById("enroll1")
enroll1.setAttribute("onclick", "funenroll1()")
function funenroll1() {
    enroll1.innerHTML = "welcome"
    // Store data in local storage
    localStorage.setItem("coursename", "deeplearning");
    // Retrieve data frm local storage
    document.getElementById("rc").innerHTML += localStorage.getItem("coursename")
}

//enroll courses2
var enroll2 = document.getElementById("enroll2")
enroll2.setAttribute("onclick", "funenroll2()")
function funenroll2() {
    enroll2.innerHTML = "welcome"
    // Store data in local storage
    localStorage.setItem("coursename","cp");
    // Retrieve data frm local storage
    document.getElementById("rc").innerHTML += localStorage.getItem("coursename")
}

//my course tab
var click2 = document.getElementById("mc")
click2.setAttribute("onclick", "funmc('" + localStorage.getItem("coursename") + "')")
function funmc(cn) {
    click.style.borderBottom=""
    click1.setAttribute("style","border-bottom:0px")
    click2.style.borderBottom="3px solid #20fc8f"
    //clearing the previous content
    document.getElementById("rc").innerHTML = ""
    if (cn == undefined){
        document.getElementById("rc").innerHTML += "no course is activated"
    }
    if (cn == "deeplearning") {
        document.getElementById("rc").innerHTML += `
        <div class="row rc1">
                    <!-- 1st course -->
                        <div class="col-xl-4 first" >
                            <div class="card" style="width: 23rem;">
                                <img src="b1p1.PNG" class="card-img-top img" alt="">
                            <div class="card-body">
                                  <h5 class="card-title">Deep Learning</h5>
                                  <img src="stars.PNG" class="card-img-top" alt="">
                                  <p class="card-text">...</p>
                                  <a href="#" class="card-link">Course Details</a>
                                  <a href="#" class="btn btn-success enroll" id="sc01" >Start course</a>
                            </div>
                            </div>
                        </div>`
    }
    if (cn == "cp") {
        document.getElementById("rc").innerHTML += `
        <div class="col-xl-4 second">
        <div class="card" style="width: 23rem;">
            <img src="b1p2.PNG" class="card-img-top img" alt="">
        <div class="card-body">
              <h5 class="card-title">C Programming</h5>
              <img src="stars.PNG" class="card-img-top" alt="">
              <p class="card-text">...</p>
              <a href="#" class="card-link">Course Details</a>
              <a href="#" class="btn btn-success enroll" id="sc02">Start course</a>
        </div>
        </div>
    </div>`
    }
}

