import React, { useEffect, useState } from 'react'

const DataFetch = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
       async function getData() {
           const res = await fetch("https://jsonplaceholder.typicode.com/todos");
           const data = await res.json();
           if(data && data.length) setData(data);
       }
       getData();
    }, []);
  return (
    <div>
        <ul>
            {data.map((todo) => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default DataFetch