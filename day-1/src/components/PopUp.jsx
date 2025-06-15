import React from 'react'

const PopUp = ({ copied }) => {
  return (
    <div>
        {copied && (<p>Copied to clipboard</p>)}
    </div>
  )
}

export default PopUp