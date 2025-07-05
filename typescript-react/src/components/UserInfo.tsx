import type React from "react";
import type { Info } from "../types"

type UserInfoType = {
    user: Info;
}

const UserInfo: React.FC<UserInfoType> = ({ user }) => {
    
  return (
    <div>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
    </div>
  )
}

export default UserInfo