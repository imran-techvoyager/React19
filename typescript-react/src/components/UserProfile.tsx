import { useState } from "react";

interface UserProfileProp {
    name: string;
    email: string;
    age: number;
}
const UserProfile = () => {
    const [profile, setProfile] = useState<UserProfileProp>({name: "", age: 0, email: ""});

    function updateName(name: string){
        setProfile((prev) => ({...prev, name}));
    }

    function updateEmail(email: string){
        setProfile((prev) => ({...prev, email}));
    }

    function updateAge(age: string){
        setProfile((prev) => ({...prev, age: Number(age)}));
    }

  return (
    <div>
        <div>
            <input type="text" value={profile.name} placeholder="enter name" onChange={(e) => updateName(e.target.value)}/>
        </div>
        <div>
            <input type="text" value={profile.email} placeholder="enter email" onChange={(e) => updateEmail(e.target.value)}/>
        </div>
        <div>
            <input type="number" value={profile.age > 0 ? profile.age : ''} placeholder="enter age" onChange={(e) => updateAge(e.target.value)}/>
        </div>
        <div>
            <h1>{profile.name}</h1>
            <h1>{profile.email}</h1>
            <h1>{profile.age}</h1>
        </div>
    </div>
  )
}

export default UserProfile