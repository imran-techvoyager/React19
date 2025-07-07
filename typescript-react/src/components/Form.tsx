import { useRef, useState, type FormEvent } from "react"

type Formdata = {
    name: string;
    email: string;
    password: string;
}

const Form = () => {
    const [submmitedData, setSubmmitedData] = useState<Formdata>({name: "", email: "", password: ""});
    const name = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {

         event.preventDefault();

         const nameRef = name.current!.value; 
         const emailRef = email.current!.value; 
         const passwordRef = password.current!.value; 

          setSubmmitedData({
            name: nameRef,
            email: emailRef,
            password: passwordRef
          })
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="enter name" ref={name}/>
            <input type="email" placeholder="enter email" ref={email}/>
            <input type="password" placeholder="enter password" ref={password}/>
            <button type="submit">Submit</button>
        </form>

        <section>
            <h1>Name: {submmitedData.name}</h1>
            <h1>Email: {submmitedData.email}</h1>
            <h1>Password: {submmitedData.password}</h1>
        </section>
    </div>
  )
}

export default Form