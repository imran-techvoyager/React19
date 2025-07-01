import { useState } from 'react';
import "./index.css";

const Form = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const [errorUserName, setErrorUserName] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
    
    const [userColor, setUserColor] = useState("");
    const [emailColor, setEmailColor] = useState("");
    const [passwordColor, setPasswordColor] = useState("");
    const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

    const handleClick = () => {
        if(userName.length > 8){
            setErrorUserName("");
            setUserColor("green");
        }else{
            setErrorUserName("username should be atleast 8 characters");
            setUserColor("red");
        }
        
        if(email.includes("@gmail.com")){
            setErrorEmail("");
            setEmailColor("green");
        }else{
            setErrorEmail("Invalid email type");
            setEmailColor("red");
        }

        if(password.length > 8){
            setErrorPassword("");
            setPasswordColor("green");
        }else{
            setErrorPassword("password should be atleast 8 characters");
            setPasswordColor("red");
        }

        if(password != "" && confirmPassword == password){
            setErrorConfirmPassword("");
            setConfirmPasswordColor("green");
        }else{
            setErrorConfirmPassword("Password doesnt match");
            setConfirmPasswordColor("red");
        }

    }

  return (
    <div className='card'>
    <div className='card-image'>
        <form>
            <input 
            type="text" 
            placeholder='Username'
            style={{borderColor: userColor}}
            value={userName} 
            onChange={(e) => setUserName(e.target.value)}
            />
            <p>{errorUserName}</p>

            <input 
            type="text" 
            placeholder='Email'
            style={{borderColor: emailColor}}
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            />
            <p>{errorEmail}</p>

            <input 
            type="password" 
            placeholder='password'
            style={{borderColor: passwordColor}}
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            />
            <p>{errorPassword}</p>

            <input 
            type="password" 
            placeholder='confirm Password'
            style={{borderColor: confirmPasswordColor}}
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <p>{errorConfirmPassword}</p>

            <button className='submit-btn' onClick={handleClick}>Submit</button>
        </form>
    </div>
    </div>
  )
}

export default Form;