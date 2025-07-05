import AdminInfo from "./components/AdminInfo"
import Button from "./components/Button"
import User from "./components/User"
import User1 from "./components/User1"
import UserInfo from "./components/UserInfo"
import { type Info, type AdminInfoList } from "./types"

function App() {
  const user: Info = {
        id: 1,
        name: "imran",
        email: "imran@gmail.com"
    }

    const admin: AdminInfoList = {
      id: 2,
      name: "immu",
      email: "imm@gmail.com",
      role: "softy",
      lastLogin: new Date()
    }

  return (
    <div>
      <User name={"imran"} age={23} isStudent={true}/>
      <User1>
        Hello
      </User1>
      <Button label = 'Click' onClick={() => console.log('clicked')} disabled={false}/>
        <UserInfo user={user} />
        <AdminInfo admin={admin}/>
    </div>
  )
}

export default App
