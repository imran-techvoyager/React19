import React, { useEffect, useState } from 'react'

const HookTwo = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
       console.log('call useEffect');
       document.title = `increment ${value}`
    }, []);
  return (
    <div>
        <h2>{value}</h2>
        <button onClick={() => setValue(value + 1)}>click me</button>
    </div>
  )
}

export default HookTwo