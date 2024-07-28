let p=fetch("https://goweather.herokuapp.com/weather/chennai")
p.then((value1)=>{
    console.log("The status is "+value1.status)
    console.log("The ok is "+value1.ok)
    return value1.json();
}).then((value2)=>{
    console.log(value2)
})  