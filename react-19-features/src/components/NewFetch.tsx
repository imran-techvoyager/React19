import { use } from "react"

const fetchData = async () => {
     const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
     return res.json()
}

const NewFetch = () => {
    const data = use(fetchData());
  return (
    <div>
        <h1>{data.title}</h1>
    </div>
  )
}

export default NewFetch