import type React from "react";
import { type AdminInfoList } from "../types"

type AdminProp = {
    admin: AdminInfoList;
}

const AdminInfo: React.FC<AdminProp> = ({ admin }) => {
  return (
    <div>
        <h1>{admin.name}</h1>
        <h1>{admin.email}</h1>
        <h1>{admin.id}</h1>
        <h1>{admin.role}</h1>
        <h1>{admin.lastLogin.toLocaleDateString()}</h1>
    </div>
  )
}

export default AdminInfo