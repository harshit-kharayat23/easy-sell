import axios from "axios"

export default async function User(){

    const response=await axios("https://jsonplaceholder.typicode.com/todos/1");

    await new Promise(r=>setTimeout(r,5000));
    const data=response.data;
    console.log("hi");


    return (
        <div>
            User Page
            {data.title}
            {data.completed}
        </div>
    )
    


}
