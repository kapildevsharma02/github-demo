try{
    let age=prompt("Enter your age");
    age=Number.parseInt(age)
    if(age>150)
    throw new ReferenceError(age+" This is probably not true")
}catch(error){
    console.log("The error name is "+error.name)
    console.log("The error message is "+error.message)
    console.log("The error stack is "+error.stack)
}

console.log("The script is still running")