import React, { useState } from 'react'

const Switch = () => {
    const [sw, setSw] = useState(false);

  return (
    <div>
        {sw ? (
            <span>Dark</span>
        ) : (
            <span>Light</span>
        )}

        <br />

        <input type="text" key={sw ? "light" : "dark"}/>
        <button onClick={() => setSw((s) => !s)}>switch</button>
    </div>
  )
}

export default Switch