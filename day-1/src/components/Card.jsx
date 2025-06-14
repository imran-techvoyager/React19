import React from 'react'
// the below can also be written as const Card = ({children}) => { return <div>{children}</div>}
//that is object or prop destructuring
const Card = (props) => {
  return (
    <div>{props.children}</div>
  )
}

export default Card