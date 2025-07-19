import { context, context1 } from "../App"

const ComponentC = () => {
  return (
    <div>
        <context.Consumer>
            {(name) => {
                return(
                   <context1.Consumer>
                       {(age) => (
                         <h1>my name is {name} and im {age} years old</h1>
                       )}
                   </context1.Consumer>
                )
           }}
        </context.Consumer>
    </div>
  )
}

export default ComponentC