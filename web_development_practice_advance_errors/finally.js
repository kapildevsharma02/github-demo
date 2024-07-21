/*If we will write the try inside the function and mentioning the return statment then also there is
gurantee that finally block will get executed!!
*/

const f=()=>{
    // As we can there is no error in the try block
    // and it is returning also from the try  
    // but the output will be Program run successfully!
    //Executing at any cost
    try{
        let a=0
        // console.log(Program)
        console.log("Program run successfully!")
        return 
    }
    catch(err){
        console.log(err+" This is an error")
    }
    finally{
        console.log("Executing at any cost!")
        /*
        Please note inside the finally the statment such as 
        Close the file
        exit from the file etc 
        */
    }
}
f()