import React from 'react'

const User = (props) => {
  return (
    <div>
        <h1>Name: {props.name}</h1>
        <h2>Age: {props.age}</h2>
        <h3>Is married: {props.isMarried}</h3>
        <h4>Hobbies: {props.hobbies}</h4>
    </div>
  )
}

export default User