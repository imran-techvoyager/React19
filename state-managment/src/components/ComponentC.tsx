import { context, context1 } from "../App"
import { useContext } from "react"

const ComponentC = () => {
    const userName = useContext(context);
    const userAge = useContext(context1);
  return (
    <div>
        <h1>my name is {userName} and im {userAge} years old</h1>
    </div>
  )
}

export default ComponentC