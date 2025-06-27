import { UserContext } from "./UserContext";
import { useContext, useState } from "react";


const UserUpdate = () => {
    const {updateUser} = useContext(UserContext);
    const [newName, setNewName] = useState('');

    const handleSubmit = (e) => {
          e.preventDefault();

          if(newName.trim()){
            updateUser(newName);
            setNewName('');
          }
    }

  return (
    <div>
         <h1>Update Name</h1>
         <form onSubmit={handleSubmit}>
            <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Enter New Name"/>
            <button type="submit">Update Name</button>
         </form>
    </div>
  )
}

export default UserUpdate