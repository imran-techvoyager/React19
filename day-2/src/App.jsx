import React from 'react'
import ComponentA from './propdrill/ComponentA'

const App = () => {
  const name = "imran";
  
  return (
    <div>
      <ComponentA name={name}/>
    </div>
  )
}

export default App