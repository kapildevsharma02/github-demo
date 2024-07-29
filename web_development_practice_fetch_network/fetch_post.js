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

const getTodo=async (id)=>{
    let response=await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
    let r=await response.json();
    return r;
}
const mainFun=async ()=>{
    let todo=await createTodo()
    console.log(todo)
    console.log(await getTodo(5))
}

mainFun();
