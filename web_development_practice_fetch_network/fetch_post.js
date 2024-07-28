const createTodo=async()=>{
    let options={
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify({
            title: 'Harry',
            body: 'Bhai',
            userId: 11100,
        }),
    }
    let p=await fetch('https://jsonplaceholder.typicode.com/posts',options)
    let response=await p.json();
    return response;
}

const mainFun=async ()=>{
    let todo=await createTodo()
    console.log(todo)
}

mainFun();      
