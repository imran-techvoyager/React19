import React from 'react'
import { context } from '../App'
import { context1 } from '../App'

const ComponentC = () => {
  return (
    <context.Consumer>
        {(name) => {
            return <context1.Consumer>
                {(age) => (
                    <h1>my name is {name} and im {age} years old</h1>
                )}
            </context1.Consumer>
        }}
    </context.Consumer>
  )
}

export default ComponentC