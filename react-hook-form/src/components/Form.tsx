import { useForm, type SubmitHandler } from 'react-hook-form';

type FormData = {
    name: string;
    email: string;
    password: string;
}

const Form = () => {
    const { register,
            handleSubmit, 
            formState: {errors, isSubmitting} 
          } = useForm<FormData>();

    const onSubmitHandler: SubmitHandler<FormData> = (data) => {
         console.log(data)
    }

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                placeholder='enter name' 
                id='name' 
                {...register("name", {required: "name is required"})}
            />
            {errors.name && <p style={{color: 'red'}}>{errors.name.message}</p>}
        </div>
        <div>
            <label htmlFor="email">Name:</label>
            <input
                type="email"
                placeholder='enter email' 
                id='email' 
                {...register("email", {
                    required: "email is required",
                    pattern:{
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email"
                    }
                })}
            />
            {errors.email && <p style={{color: 'red'}}>{errors.email.message}</p>}
        </div>
        <button type='submit'>submit</button>
    </form>
  )
}

export default Form