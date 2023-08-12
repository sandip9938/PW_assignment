async function getcombinedData(){
    const [data1,data2] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/todos/1").then((response)=>response.json()
        )
        ,fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>{})
    ]);
    const combinedData ={
        todo:data1,
        post:data2,
    }
    return(combinedData);
}
getcombinedData().then((data) => console.log(data));