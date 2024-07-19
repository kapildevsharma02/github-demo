try{
    throw new ReferenceError("Harry is not good")
}catch(error){
    console.log("This is the name of the error "+error.name)
    console.log("This is the error message "+error.message)
}