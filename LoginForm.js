import React from 'react'
import {useForm} from "react-hook-form"


function LoginForm() {

    const {register, handleSubmit,  formState: { errors } } = useForm();
    

    const onSubmit = (data, e) =>  {
        e.preventDefault();
        console.log(data)
        };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <input placeholder="Enter username" id="username" 
                {...register("username", {required: true, minLength: 3})} />
            {errors.username?.type === 'required' && "This field is required"}
            {errors.username?.type === 'minLength' && "This field must contain at least 3 characters."}
            {/* {errors.username && <span>This field is required and must contain at least 3 characters.</span>} */}
            
            <input type="password" placeholder="Password" id="password" 
                {...register("password",  {required: true, minLength: 6})} />
            {errors.password?.type === 'required' && "This field is required"}
            {errors.password?.type === 'minLength' && "This field must contain at least 6 characters."}


            <input type="submit" value="Login" />    

        </form>
    )
}

export default LoginForm

 
