console.log("HI")
let p1=new Promise((resolve,reject)=>{
    // alert("Hey I am not Resolved")
    setTimeout(()=>{
        resolve(1);
    },2000)
});

p1.then((value)=>{
    console.log("Hurray")
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(4);
        },6000)
    })
}).then((value)=>{
    console.log(value)
})

p1.then(()=>{
   console.log("Congratulations this promise is now resolved")
})
// this is the work and 