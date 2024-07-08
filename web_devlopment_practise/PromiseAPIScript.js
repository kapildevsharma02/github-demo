//This is the example of the allSettled Promise Example in which suppose if there is a promise which
// gets failed then with the help of the Promise.all the function will not able to return the promise 
// therefore it will cause or debrupt abnormaly
// In order to avoid this we will use Promise.allSettled
let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // console.log("Value 1")
        // resolve("Value 1")
        resolve(4);
    },1000)
})

let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // console.log("Value 2")
        // resolve("Value 2")
        reject(new Error("This is the error in Promise 2"))
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

// let promise_all=Promise.allSettled([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })

let promise_all=Promise.all([p1,p2,p3])
promise_all.then((value)=>{
    console.log(value);
})


let promise_all_settled=Promise.allSettled([p1,p2,p3])
promise_all_settled.then((value)=>{
    console.log(value);
})

let promise_all_race=Promise.race([p1,p2,p3])
promise_all_race.then((value)=>{
    console.log(value);
})

let promise_all_any=Promise.any([p1,p2,p3])
promise_all_any.then((value)=>{
    console.log(value);
})



