import Button from "./components/Button"
import User from "./components/User"
import User1 from "./components/User1"

function App() {

  return (
    <div>
      <User name={"imran"} age={23} isStudent={true}/>
      <User1>
        Hello
      </User1>
      <Button label = 'Click' onClick={() => console.log('clicked')} disabled={false}/>
    </div>
  )
}

export default App
