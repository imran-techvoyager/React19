import type { ReactNode } from "react"

type Usertype = {
    children: ReactNode
}
const User1 = ({children}: Usertype) => {
  return (
    <div>
        <p>{children}</p>
    </div>
  )
}

export default User1