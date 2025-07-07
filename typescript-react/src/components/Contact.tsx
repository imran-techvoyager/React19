import { useState, type ChangeEvent, type FormEvent } from "react"

type ContactType = {
    name: string;
    email: string;
}

const Contact = () => {
    const [formData, setFormData] = useState<ContactType>({name: "", email: ""});

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
          const {name, value} = e.target;
          setFormData((prev) => ({...prev, [name]: value}));
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("form data: ", formData)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Name: 
                    <input type="text" placeholder="Enter name" value={formData.name} onChange={handleChange} name="name"/>
                </label>
            </div>
            <div>
                <label>
                    Email: 
                    <input type="email" placeholder="Enter email" value={formData.email} onChange={handleChange} name="email"/>
                </label>
            </div>
            <button type="submit">submit</button>
        </form>
    </div>
  )
}

export default Contact