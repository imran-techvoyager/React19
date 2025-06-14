import Card from "./components/Card";
import User from "./components/Properties";
import Welcome from "./components/WelcomeMessage"
function App() {

  // const myName = "imran";
  // const multiply = (a, b) => a*b;
  // const specialClass = "special-class"
   const numbers = [1, 2, 3, 4, 5];
   const userList = [
    {id: 1, name: "imran", age: 23},
    {id: 2, name: "harkirat", age:30},
    {id: 3, name: "harry", age: 35}
   ]

  return (
    <div id ="section">
      <Welcome />
      {/* expressions in jsx */}
      {/* <h3>my name is {myName}</h3>
      <p className={specialClass}>multiplication of 2 with 10 is {multiply(2, 10)}</p>
      <p>my friends list: {["imran", "harkirat", "yash makhija", "aryan"].join(", ")}</p> */}
      { numbers.map((num)=>{
        return <ul key={num}> {/*everything in a loop should have a key associated with it so that there is no problem i changing the values in future*/}
          <li>{num}</li>
        </ul>
      }) }
      
      { userList.map(users => (
        <div key={users.id}>
          <h1>{users.name}</h1>
          <h2>{users.age}</h2>
        </div>
      )) }
      <User name="imran" age={23} isMarried={false} hobbies={["cricket", "basketball", "coding"].join(", ")}/>
      <Card>
        <h1>Heading of the card</h1>
        <p>Content of the card</p>
      </Card>
    </div>
  )
}

export default App
