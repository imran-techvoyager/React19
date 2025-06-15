import React, { useState } from 'react'
import PopUp from './PopUp';

const CopyInput = () => {
    const [inputValue, setInputValue] = useState("");
    const [copied, setCopied] = useState(false);
    
    const handleClick = () => {
        navigator.clipboard.writeText(inputValue).then(() => {
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 2000)
        })
    }

  return (
    <div>
        <input 
           type="text" 
           placeholder='Input field' 
           value={inputValue} 
           onChange={(e)=> setInputValue(e.target.value)}
        />
        <button onClick={handleClick}>Copy</button>
        <PopUp copied={copied}/>
    </div>
  )
}

export default CopyInput