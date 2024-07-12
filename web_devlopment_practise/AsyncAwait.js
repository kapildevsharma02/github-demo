//This is the practical example of the asyncawait example
//by appending the asyc at the beginning of the function it allows us to use then method 

function sum(a,b){
    return a+b;
}

async function harry(){
    let delhiWeather=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("27 Deg")
        },2000)
    })

    let bangaloreWeather=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("21 Deg")
        },5000)
    })

    console.log("Fetching Delhi Weather Please Wait ")
    let delhiW=await delhiWeather
    console.log("Fetched Delhi Weather "+delhiW)

    let bangaloreW=await bangaloreWeather
    console.log("Fetched Bangalore Weather "+bangaloreW)
    return [delhiW,bangaloreW]
}
console.log("Welcome to Weather Control Room")
const cherry=(()=>{console.log("Hey I am cheery and I am not Waiting!")})
let a=harry()
let b=cherry()
console.log(a)
a.then((value)=>{console.log(value)})

const s=sum(2,3);
console.log("The sum is "+s);
//this is yashchecking github commit