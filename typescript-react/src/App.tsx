import { useEffect, useState } from 'react'
import axios from 'axios';

type User = {
  name: string;
  username: string;
}

function App() {
  const [data, setData] = useState<User[]>([])

  const [loading, setLoading] = useState(true);

  useEffect(() => {
       setTimeout(() => {   
         axios.get("https://jsonplaceholder.typicode.com/users")
         .then(res => {
          setData(res.data)
          setLoading(false)
         })
       }, 5000);
  }, []);

  if(loading){
    return "Loading..."
  }

  return (
    <>
      {data.map((user) => (
        <div>         
          <h1>{user.name}</h1>
          <p>{user.username}</p>
        </div>
      ))}
    </>
  )
}

export default App
