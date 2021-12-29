import axios from "axios";
import React, { SyntheticEvent, useState } from "react";
import { Redirect } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.post('login',  {
            email,
            password
        });

    // const handleSubmit = async (e: SyntheticEvent) => {
    //     e.preventDefault();
    //     // login logic
    //     await fetch('http://localhost:3300/users', {
    //         method: 'GET',
    //     }).then((response) => {
    //         return response.json()
    //     }).then((data) => {
    //         return data.filter((item: { email: string; }) => item.email == email)[0]
    //     }).then((data) => {
    //         if(data.email == email && data.password == password)
    //         {
    //             console.log(data)
    //             setRedirect(true)
    //             document.cookie = "login=true;max-age=36000;"; 
    //             document.cookie = `firstName=${data.firstName};max-age=36000;`; 
    //         }
    //         else
    //         {
    //             console.log('credential invalid')
    //         }
    //     })
    // }

    // setRedirect(true);   
    }
        if (redirect) {
        return <Redirect to={'/'}/>
    }


    return(
        
        <main className="form-signin">
            <form onSubmit={Login}>
                    <h1 className="h3 mb-3 fw-normal ">Please Sign In</h1>
                    
                    <input type="email" className="form-control" placeholder="Email" required 
                    onChange={e => setEmail(e.target.value)}
                    />
                    <br></br>
                    <input type="password" className="form-control" placeholder="Password" required 
                    onChange={e => setPassword(e.target.value)}
                    />
                    <br></br>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
            </form>
      </main>
    );
}
export default Login;