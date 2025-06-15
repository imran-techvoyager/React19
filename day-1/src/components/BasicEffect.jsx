import React, { useEffect, useState } from 'react'

const BasicEffect = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
         const dataFetch = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/todos");
            const data = await res.json();
            if(data && data.length) setData(data);
         }
         dataFetch();   
    }, [data])
  return (
    <div>
        {data.map((todo) => (
           <h1 key={todo.id}>{todo.title}</h1>
        ))}
    </div>
  )
}

export default BasicEffect