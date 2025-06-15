import React, { useState } from 'react'

const TodoList = () => {
     const [todos, setTodos] = useState([]);
     const [inputValue, setInputValue] = useState("");

     const handleSubmit = (e) => {
          e.preventDefault();

          if(inputValue.trim()){
            setTodos([...todos, inputValue]);
            setInputValue("");
          }
     }

     const handleChange = (e) => {
           setInputValue(e.target.value);
     }

  return (
    <div>
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={inputValue} placeholder='Enter Todo'/>
            <button type="submit">Add todo</button>
        </form>

        {todos.map((todo, index) => (
            <ul>
                <li key={index}>{todo}</li>
            </ul>
        ))}

    </div>
  )
}

export default TodoList