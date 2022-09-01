import { useEffect } from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {
  
    const defaultUsername = 'Admin'
    const defaultEmail = 'admin@admin.com'
    const defaultPassword = 'MyPass'
    
    const {formState, onInputChange, username, email, password, onResetForm} = useForm({
        username: defaultUsername,
        email: defaultEmail,
        password : defaultPassword , 
    
    });


   // const { username: username, email , password} = formState; 


    return (
    <>
        <h1>Simple Form With Custom Hook</h1>
        <hr />

        <input 
            type="text" 
            className="form-control"
            placeholder="Username"
            name="username"
            value = {username}
            onChange = {onInputChange}
        />

        <input 
            type="email"
            className="form-control mt-2"
            placeholder="fcambra9@gmail.com"
            name="email" 
            value = {email}
            onChange = {onInputChange}
        />

        <input 
            type="password"
            className="form-control mt-2"
            placeholder="password"
            name="password" 
            value = {password}
            onChange = {onInputChange}
        />

        <button onClick={ onResetForm } className="btn btn-primary mt-2"> Reset </button>

        {
            (username === defaultUsername ) && <Message/>
        }


    </>
    
  )
}
