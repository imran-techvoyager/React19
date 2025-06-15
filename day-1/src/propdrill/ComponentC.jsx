import React from 'react'
import { context } from '../App2'
import { context1 } from '../App2'

const ComponentC = () => {
  return (
    <context.Consumer>
        { (name) => {
            return (
                <context1.Consumer>
                    { (age) => {
                        return <h1>my name is {name} and im {age} years old</h1>
                    } }
                </context1.Consumer>
            )
        } }
    </context.Consumer>
  )
}

export default ComponentC