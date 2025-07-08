import { useState, useEffect } from "react"

type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const FetchData = () => {
    const [data, setData] = useState<Todo>({userId: 0, id: 0, title: "", completed: false});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
       async function fetching(){
         const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
         const result = await res.json();
         setData(result);
         setLoading(false)

         return data;
       }

       fetching();

    }, []);

    if(loading){
        return "Loading..."
    }
  return (
    <div>
        <h1>{data.title}</h1>
    </div>
  )
}

export default FetchData