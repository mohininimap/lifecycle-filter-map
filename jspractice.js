// console.log(1||2) //output 1
// console.log(2||1) //output 1
// //In or first get true value that is output

// console.log(1&&2) //output is 2
// console.log(1&&2&&3)//output is 3

// console.log(1||2||3)//output is 1
// console.log(3||2||1)//output is 3

// console.log(2||"") //output 2
// console.log(""||2) //output 2

// console.log("  "||2) //output space value
// console.log(2||"   ") //output 2 value

// console.log((1&&2&&3)&&(2&&3&&1))

// --------------------
// Callback can have synchronous or asynchronous also.

// Synchronous callback example
// let a=[1,2,3,4,5,6,7,8,9,10]
// console.log("start")
// a.forEach(item=>{
//     console.log(item)
// })
// console.log("end")
// ===================

// console.log("start")
// function getName(name){
//     setTimeout(()=>{
// return name;
//     },0)
// }

// var nm=getName("Gaury");
// console.log(nm)//here name come undefined

// console.log("end")

// ====================

// function displayName(name,callback){
// setTimeout(()=>{
  
//     return name;
// },0)
// callback(name)
// }

// var nm=displayName("Mohini",(nm)=>{
//     console.log(nm)
// })
// =============================

// function displayFunction(name,callback){
//     callback(name)
//     return name;
// }
// var nm=displayFunction("Mohini",(nm)=>{
//     console.log(nm)
// }) //if here i declare nm using nm then cannot access nm before initialization come
// ========================================

// function displayName(name){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve("Good morning ,"+name)
//         },2000);
//     })
// }

// displayName("Monalisa").then((msg)=>{
//     console.log(msg)
// })