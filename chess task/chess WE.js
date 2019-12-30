//Elephant-rook
var WE=document.getElementById("R1C1")
WE.setAttribute("onclick","funWE()")
function funWE(){
    clear()
 for(i=2;i<9;i++){
    document.getElementById("R"+i+"C1").style.backgroundColor="blue"
 }
 for(i=2;i<9;i++){
    document.getElementById("R1"+"C"+i).style.backgroundColor="blue"
 }
}



//Bishop
var WB=document.getElementById("R1C3")

// WB.setAttribute("onclick","location.reload(),funWB()")
WB.setAttribute("onclick","funWB()")
function funWB(){
    clear()
    j=2
    for(i=2;i<4;i++){
        document.getElementById("R"+i+"C"+j).style.backgroundColor="blue"
        j--
     }
    k=4
    for(i=2;i<7;i++){
    document.getElementById("R"+i+"C"+k).style.backgroundColor="blue"
    k++
 }
}

//Horse - knight
var WH=document.getElementById("R1C2")
WH.setAttribute("onclick","funWH()")
function funWH(){
    clear()
    document.getElementById("R2C2").style.backgroundColor="blue"
    document.getElementById("R3C2").style.backgroundColor="blue"
    document.getElementById("R3C1").style.backgroundColor="blue"
    document.getElementById("R3C3").style.backgroundColor="blue"
    // document.getElementById("R1C2").style.backgroundColor="blue"
}

//King
var WK=document.getElementById("R1C4")
WK.setAttribute("onclick","funWK()")
function funWK(){
    clear()
    document.getElementById("R1C3").style.backgroundColor="blue"
    document.getElementById("R1C5").style.backgroundColor="blue"
    document.getElementById("R2C3").style.backgroundColor="blue"
    document.getElementById("R2C4").style.backgroundColor="blue"
    document.getElementById("R2C5").style.backgroundColor="blue"
}

//Queen
var WQ=document.getElementById("R1C5")
WQ.setAttribute("onclick","funWQ()")
function funWQ(){
    clear()
    //diagonal
    j=5
    for(i=1;i<6;i++){
        document.getElementById("R"+i+"C"+j).style.backgroundColor="blue"
        j--
     }
    k=5
    for(i=1;i<5;i++){
    document.getElementById("R"+i+"C"+k).style.backgroundColor="blue"
    k++
    }

    //full row
    for(i=1;i<9;i++){
        document.getElementById("R"+i+"C5").style.backgroundColor="blue"
     }

     //full col
     for(i=1;i<9;i++){
        document.getElementById("R1"+"C"+i).style.backgroundColor="blue"
     }

     document.getElementById("R1C5").style.backgroundColor="white"
}


//second Elephant-rook
var WEE=document.getElementById("R1C8")
WEE.setAttribute("onclick","funWEE()")
function funWEE(){
    clear()
 for(i=2;i<9;i++){
    document.getElementById("R"+i+"C8").style.backgroundColor="blue"
 }
 for(i=1;i<8;i++){
    document.getElementById("R1"+"C"+i).style.backgroundColor="blue"
 }
}

//second Bishop
var WBB=document.getElementById("R1C6")
WBB.setAttribute("onclick","funWBB()")
function funWBB(){
    clear()
    j=5
    for(i=2;i<7;i++){
        document.getElementById("R"+i+"C"+j).style.backgroundColor="blue"
        j--
     }
    k=7
    for(i=2;i<4;i++){
    document.getElementById("R"+i+"C"+k).style.backgroundColor="blue"
    k++
 }
}

//second Horse - knight
var WHH=document.getElementById("R1C7")
WHH.setAttribute("onclick","funWHH()")
function funWHH(){
    clear()
    // document.getElementById("R1C7").style.backgroundColor="blue"
    document.getElementById("R2C7").style.backgroundColor="blue"
    document.getElementById("R3C7").style.backgroundColor="blue"
    document.getElementById("R3C6").style.backgroundColor="blue"
    document.getElementById("R3C8").style.backgroundColor="blue"
}

//sol 1
var s1=document.getElementById("R2C1")
s1.setAttribute("onclick","funs1()")
function funs1(){
    clear()
    // document.getElementById("R2C1").style.backgroundColor="blue"
    document.getElementById("R3C1").style.backgroundColor="blue"
    document.getElementById("R4C1").style.backgroundColor="blue"
}

//sol 2
var s2=document.getElementById("R2C2")
s2.setAttribute("onclick","funs2()")
function funs2(){
    clear()
    // document.getElementById("R2C2").style.backgroundColor="blue"
    document.getElementById("R3C2").style.backgroundColor="blue"
    document.getElementById("R4C2").style.backgroundColor="blue"
}

//sol 3
var s3=document.getElementById("R2C3")
s3.setAttribute("onclick","funs3()")
function funs3(){
    clear()
    // document.getElementById("R2C3").style.backgroundColor="blue"
    document.getElementById("R3C3").style.backgroundColor="blue"
    document.getElementById("R4C3").style.backgroundColor="blue"
}

//sol 4
var s4=document.getElementById("R2C4")
s4.setAttribute("onclick","funs4()")
function funs4(){
    clear()
    // document.getElementById("R2C1").style.backgroundColor="blue"
    document.getElementById("R3C4").style.backgroundColor="blue"
    document.getElementById("R4C4").style.backgroundColor="blue"
}

//sol 5
var s5=document.getElementById("R2C5")
s5.setAttribute("onclick","funs5()")
function funs5(){
    clear()
    // document.getElementById("R2C1").style.backgroundColor="blue"
    document.getElementById("R3C5").style.backgroundColor="blue"
    document.getElementById("R4C5").style.backgroundColor="blue"
}

//sol 6
var s6=document.getElementById("R2C6")
s6.setAttribute("onclick","funs6()")
function funs6(){
    clear()
    // document.getElementById("R2C1").style.backgroundColor="blue"
    document.getElementById("R3C6").style.backgroundColor="blue"
    document.getElementById("R4C6").style.backgroundColor="blue"
}

//sol 7
var s7=document.getElementById("R2C7")
s7.setAttribute("onclick","funs7()")
function funs7(){
    clear()
    // document.getElementById("R2C1").style.backgroundColor="blue"
    document.getElementById("R3C7").style.backgroundColor="blue"
    document.getElementById("R4C7").style.backgroundColor="blue"
}

//sol 8
var s8=document.getElementById("R2C8")
s8.setAttribute("onclick","funs8()")
function funs8(){
    clear()
    // document.getElementById("R2C1").style.backgroundColor="blue"
    document.getElementById("R3C8").style.backgroundColor="blue"
    document.getElementById("R4C8").style.backgroundColor="blue"
}


function clear(){
    for(i=1;i<9;i++){
        for(j=1;j<9;j++){
            // console.log(i,j)
            if(i%2==1 && j%2==0){
                // console.log("R"+i+"C"+j)
            document.getElementById("R"+i+"C"+j).style.backgroundColor="grey"
            }
            if(i%2==0 && j%2==1){
                // console.log("R"+i+"C"+j)
                 document.getElementById("R"+i+"C"+j).style.backgroundColor="grey"
                }
            if(i%2==0 && j%2==0){
                document.getElementById("R"+i+"C"+j).style.backgroundColor="white"
            }
            if(i%2==1 && j%2==1){
                document.getElementById("R"+i+"C"+j).style.backgroundColor="white"
            }
        }
    }
}
// clear()