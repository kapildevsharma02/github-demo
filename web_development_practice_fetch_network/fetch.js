let p=fetch("https://goweather.herokuapp.com/weather/chennai")
p.then((response)=>{
    console.log("The status is "+response.status)
    console.log("The ok is "+response.ok)
    console.log("Try to add response.text "+response.text())
    return response.json();
}).then((value2)=>{
    console.log(value2)
})  