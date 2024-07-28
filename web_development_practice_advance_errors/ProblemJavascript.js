// const loadScript=async (src)=>{
//     return new Promise ((resolve,reject)=>{
//         let script=document.createElement("script")
//         script.src=src;
//             script.onload=()=>{
//                 resolve(src+" Done Success")
//             }
//         document.head.append(script)
//     })
// }

// const main2=async ()=>{
//     try{
//     let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrapp@5.3.3/dist/js/bootstrap.bundle.min.js")
//     console.log(a)
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// main2()

// let p=()=>{
//       return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject(new Error("Please this is not acceptable!"))
//         },3000)
//       })  
// }

// let a=async()=>{
//     try{
//     let c=await p()
//     console.log("Value of c is "+c)
//     }
//     catch(err){
//         console.log("This error has been handled")
//     }
// }
// a()

//HACKERMAN
output=["Intitialising Hack Program","Hacking Ashish username...",
"Username found ashish17","Connecting to facebook...."]
 
async function display(){
for(let i=0;i<output.length;i++){
    let p= setTimeout(()=>{
        console.log(output[i])
    },1000)
}
}
display()