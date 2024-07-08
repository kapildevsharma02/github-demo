// So in this version we have seen there is three promises what if we 
//want the result at the same time we can do it by using this way 
let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // console.log("Value 1")
        resolve("Value 1")
    },1000)
})

let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // console.log("Value 2")
        resolve("Value 2")
    },2000)
})

let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // console.log("Value 3")
        resolve("Value 3")
    },3000)
})

// p1.then((value)=>{
//     console.log(value)
// })

// p2.then((value)=>{
//     console.log(value)
// })

// p3.then((value)=>{
//     console.log(value)
// })

let promise_all=Promise.all([p1,p2,p3])
promise_all.then((value)=>{
    console.log(value)
})

