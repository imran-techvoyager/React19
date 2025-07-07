import { useState } from "react"

interface Todo {
    id: number;
    task: string;
    completed: boolean;
}

const Todo = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [task, setTask] = useState<string>("")

    const addTodo = () => {

        const newTodo: Todo = {
           id: todos.length + 1,
           task,
           completed: false
        }

        setTodos((prevTodo) => ([...prevTodo, newTodo]));
        setTask("");
    }

  return (
    <div>
        <h1>Add Todo's</h1>
        <input type="text" placeholder="Enter Todo" value={task} onChange={(e) => setTask(e.target.value)}/>
        <button onClick={()=> addTodo()}>Add Todo</button>
        <button onClick={() => setTodos([])}>Clear</button>

        <h1>List of Todo's</h1>
        {todos.map((todo) => (
            <ul>
                <li key={todo.id}>{todo.task} {todo.completed ? "(completed)" : ''}</li>
            </ul>
        ))}
    </div>
  )
}

export default Todo;