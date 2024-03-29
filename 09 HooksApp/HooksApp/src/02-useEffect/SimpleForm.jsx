import { useState, useEffect } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  
    const defaultUsername = 'Admin'
    const defaultEmail = 'admin@admin.com'
    
    const [formState, setFormState] = useState({
        username: defaultUsername,
        email: defaultEmail
    })


    const { username, email} = formState; 
    

    const onInputChange = ({target}) => {
        const {name, value} = target; 
        setFormState( {
            ...formState,
            [name] : value  
        })


    };

    useEffect(() => {
      //console.log('form changed')
    }, [formState])

    useEffect(() => {
      //console.log('email changed')
    
    }, [email])
    

    

    return (
    <>
        <h1>SimpleForm</h1>
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

        {
            (username === defaultUsername ) && <Message/>
        }


    </>
    
  )
}
