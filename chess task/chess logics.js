//Elephant-rook
// document.getElementById("11").setAttribute("onclick","console.log(this.id)")
// document.getElementById("11").setAttribute("onclick","console.log(this.value)")
// document.getElementById("11").setAttribute("onclick","console.log(this)")
// v=document.getElementById("11").getAttribute("value")
// console.log(v)

//Elephant-rook=10
document.getElementById("15").setAttribute("onclick", "movele(this.id)")
document.getElementById("18").setAttribute("onclick", "movele(this.id)")
// document.getElementById("18").setAttribute("onclick","console.log(this.id)")
function movele(i) {
    var n = i.toString();
    r = n[0]
    c = n[1]
    // r=parseInt(n[0])+1;
    // r=r.toString();
    // c=parseInt(n[1])-1;
    // c=c.toString();
    // console.log(c)
    for (i = r; i < 9; i++) {   //loop for vertical movement
        v = document.getElementById(i + c).getAttribute("value")
        console.log(i + c, v)
        if (v == 0 || v == 1) {
            document.getElementById(i + c).style.backgroundColor = "blue"
        }
        else {
            break
        }
    }
    for (i = c; i < 9; i++) { //loop for horizontal movement
        v = document.getElementById(r + i).getAttribute("value")
        console.log(r + i, v)
        if (v == 0 || v == 1) {
            document.getElementById(r + i).style.backgroundColor = "blue"
        }
        else {
            break
        }
    }
    for (i = c; i > 0; i--) {
        v = document.getElementById(r + i).getAttribute("value")
        console.log(r + i, v)
        if (v == 0 || v == 1) {
            document.getElementById(r + i).style.backgroundColor = "blue"
        }
        else {
            break
        }
    }
}

//Bishop=12
document.getElementById("13").setAttribute("onclick", "movbis(this.id)")
document.getElementById("16").setAttribute("onclick", "movbis(this.id)")
function movbis(i) {
    var n = i.toString();
    r = n[0]
    c = n[1]

    k = parseInt(c) + 1
    k = k.toString();
    for (i = 2; i < 7; i++) {
        k = k.toString();
        t = document.getElementById(i + k)
        // console.log(t)

        if (t == null) {
            break
        }
        v = t.getAttribute("value")
        console.log(i + k, v)
        if (v == 0 || v == 12) {
            document.getElementById(i + k).style.backgroundColor = "blue"
        }
        else {
            break
        }
        // document.getElementById(i+k).style.backgroundColor="blue"
        // console.log(i+k)
        k++
    }


    j = parseInt(c) - 1
    j = j.toString();
    for (i = 2; i < 9; i++) {
        j = j.toString();
        c = document.getElementById(i + j)

        if (c == null) {
            break
        }
        v = c.getAttribute("value")
        console.log(i + j, v)
        if (v == 0 || v == 12) {
            document.getElementById(i + j).style.backgroundColor = "blue"
        }

        else {
            break
        }
        // document.getElementById(i+j).style.backgroundColor="blue"
        // console.log(i+j)
        j--
    }

}


//sol
document.getElementById("21").setAttribute("onclick", "movsol(this.id)")
document.getElementById("22").setAttribute("onclick", "movsol(this.id)")
document.getElementById("23").setAttribute("onclick", "movsol(this.id)")
document.getElementById("24").setAttribute("onclick", "movsol(this.id)")
document.getElementById("25").setAttribute("onclick", "movsol(this.id)")
document.getElementById("26").setAttribute("onclick", "movsol(this.id)")
document.getElementById("27").setAttribute("onclick", "movsol(this.id)")
document.getElementById("28").setAttribute("onclick", "movsol(this.id)")

function movsol(i) {
    var n = i.toString();
    r = n[0]
    c = n[1]
    if (r == 2) {
        e = parseInt(r) + 2;
        e = e.toString();
        q = document.getElementById(e + c)
        v = q.getAttribute("value")

        p = parseInt(r) + 1;
        p = p.toString();
        u = document.getElementById(p + c)
        d = u.getAttribute("value")

        if (v == 0 && d == 0) {
            q.style.backgroundColor = "blue"
            u.style.backgroundColor = "blue"
        }
        else if (d == 0) {
            u.style.backgroundColor = "blue"
        }
    }

    else {
        e = parseInt(r) + 1;
        e = e.toString();
        p = document.getElementById(e + c)
        v = p.getAttribute("value")
        if (v == 0) {
            document.getElementById(e + c).style.backgroundColor = "blue"
        }
    }

}

//king
document.getElementById("14").setAttribute("onclick", "mov(this.id)")
function mov(i) {
    var n = i.toString();
    r = n[0]
    c = n[1]
    rn = parseInt(r)
    cn = parseInt(c)
    //top
    kt = document.getElementById((rn - 1) + c)
    if (kt !== null) {
        v = kt.getAttribute("value")
        console.log((rn - 1) + c, v)
        if (v == 0) {
            kt.style.backgroundColor = "blue"
        }
    }

    //bottom
    kb = document.getElementById((rn + 1) + c)
    if (kb !== null) {
        v = kb.getAttribute("value")
        console.log((rn + 1) + c, v)
        if (v == 0) {
            kb.style.backgroundColor = "blue"
        }
    }

    //right
    kr = document.getElementById(r + (cn + 1))
    if (kr !== null) {
        v = kr.getAttribute("value")
        console.log(r + (cn + 1), v)
        if (v == 0) {
            kr.style.backgroundColor = "blue"
        }
    }

    //left
    kl = document.getElementById(r + (cn - 1))
    if (kl !== null) {
        v = kl.getAttribute("value")
        if (v == 0) {
            kl.style.backgroundColor = "blue"
        }
    }

    //bottomright
    kpbr = (rn + 1).toString() + (cn + 1).toString()
    kbr = document.getElementById(kpbr)
    if (kbr !== null) {
        v = kbr.getAttribute("value")
        if (v == 0) {
            kbr.style.backgroundColor = "blue"
        }
    }

    //bottomleft
    kpbl = (rn + 1).toString() + (cn - 1).toString()
    kbl = document.getElementById(kpbl)
    if (kbl !== null) {
        v = kbl.getAttribute("value")
        if (v == 0) {
            kbl.style.backgroundColor = "blue"
        }
    }

    //topright
    kptr = (rn - 1).toString() + (cn + 1).toString()
    ktr = document.getElementById(kptr)
    if (ktr !== null) {
        v = ktr.getAttribute("value")
        if (v == 0) {
            ktr.style.backgroundColor = "blue"
        }
    }

    //topleft
    kptl = (rn - 1).toString() + (cn - 1).toString()
    ktl = document.getElementById(kptl)
    if (ktl !== null) {
        v = ktl.getAttribute("value")
        if (v == 0) {
            ktl.style.backgroundColor = "blue"
        }
    }
}