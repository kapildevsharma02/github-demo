try{
    console.log(harry)
    throw new ReferenceError("Harry is not good")
}catch(error){
    console.log("The error name is "+error.name)
    console.log("The error message is "+error.message)
    console.log("The error stack is "+error.stack)
}