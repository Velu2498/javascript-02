// // function foo(a,b){
// //      result=a+b;
// // }
// // function fun1(i){
// //     console.log(i*2)
// // }




// var prom = new Promise(function (resolve, reject) {    //
//     setTimeout(function () {
//         resolve(1)
//     }, 1000)

//     setTimeout(function () {
//         reject(3)
//     }, 3000)
// })

// prom.then(function (i) {
//     console.log("y");
//     console.log(i)
// }).catch(function (i) {
//     console.log("n");
//     console.log(i)
// })


// function myprom(year) {
//     return new Promise(function (resolve, reject) {
//         var age = 2019 - year
//         if (age < 10) {
//             reject("under 18")
//         }
//         else {
//             resolve("above 18")
//         }
//     })
// }
// //calling the function
// myprom(2010)
//     .then(function (i) {
//         console.log(i)
//         return 5
//     }
//     )
//     .then(function (i) {
//         console.log(i)
//         return 1
//     }
//     )
//     .then(function (i) {
//         console.log(i)
//     }
//     )
//     .catch(function (i) {
//         console.log(i)
//     }
//     )


async function fo(){
    let prom= new Promise(function (resolve, reject) {  
        reject("done!")
        // setTimeout(function () {
        //     reject(1)
        // }, 1000)
});
// let result=await prom
// console.log(result)
}
//call function
fo()
.then(function(para){console.log(para)})
.catch(function(para){console.log(para)})
