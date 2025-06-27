import React from 'react'
import { context } from '../App'
import { context1 } from '../App'
import { useContext } from 'react'

const ComponentC = () => {
    const userName = useContext(context)
    const userAge = useContext(context1)
  return (
    <h1>my name is {userName} and im {userAge} years old</h1>
  )
}

export default ComponentC