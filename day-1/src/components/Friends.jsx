import React from 'react'
import { useState } from 'react'

const Friends = () => {
    const [group, setGroup] = useState(["alex", "charlie"]);

    const add = () => setGroup([...group, "imran"]);
    const remove = () => setGroup(group.filter(f => f !== "alex"));

  return (
    <div>
        {group.map(f => (
            <li key={Math.floor(Math.random()*10)}>{f}</li>
        ))}
        <button onClick={add}>Add friend</button>
        <button onClick={remove}>remove friend</button>
    </div>
  )
}

export default Friends