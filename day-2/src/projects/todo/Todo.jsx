import { useState } from "react"

const Todo = () => {
    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState('');

    const handleClick = () => {
        setTodo((todos) => {
           return todos.concat({
                text: input,
                id: Math.floor(Math.random() * 10)
                //Using Math.floor(Math.random() * 10) is not safe — it can generate
                //duplicate IDs, especially if you have many todos.
            });
        });

        setInput("");
    }

    const removeTodo = (id) => (
        setTodo((todos) => todos.filter((t) => t.id !== id))
    )

  return (
    <div>
        <input type="text" placeholder='New Todo' value={input} onChange={(e) => setInput(e.target.value)}/>
        <button onClick={handleClick}>Add Todo</button>
        <ul>
          {todo.map(({text, id}) => (
              <li className="m-5 flex gap-3" key={id}>
                <span className="m-5">{text}</span>
                <button onClick={() => removeTodo(id)} className="w-fit m-5 p-10">X</button>
              </li>
          ))}
        </ul>
    </div>
  )
}

export default Todo