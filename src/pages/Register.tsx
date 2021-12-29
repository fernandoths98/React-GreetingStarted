import axios from "axios";
import { Component, ReactNode, SyntheticEvent } from "react";
import { Redirect } from "react-router-dom";
import '../Login.css';

class Register extends Component {
    first_name = '';
    last_name = '';
    email = '';
    password = '';
    password_confrim = '';
    registerParam = {};

    state = {
        redirect: false
    }

    submit = async (e: SyntheticEvent) => {
        e.preventDefault();
    
        // this.registerParam = {
        //     first_name: this.first_name,
        //     last_name: this.last_name,
        //     email: this.email,
        //     password: this.password,
        //     password_confrim: this.password_confrim,
        // }
        await axios.post('register', {
            first_name: this.first_name,
            last_name: this.first_name,
            email: this.email,
            password: this.password,
            password_confirm: this.password_confrim,
        });

        // fetch('http://localhost:3300/api/register', {
        //     method: 'POST',
        //     headers: { "Content-Type": "application/json"},
        //     body: JSON.stringify(this.registerParam)
            
        // }).then((res) => {console.log(this.registerParam); console.log(res)})

        this.setState({
            redirect: true
        })
    }

    render(): ReactNode {

        if (this.state.redirect) {
            return <Redirect to={'/login'}/>
        }
        
        return (
            <main className="form-signin">
            <form onSubmit={this.submit}>
                    <h1 className="h3 mb-3 fw-normal ">Please Register</h1>
                    
                    <input className="form-control" placeholder="Fisrt Name" required 
                    onChange={e => this.first_name = e.target.value}/>
                    <br></br>
                    <input className="form-control" placeholder="Last Name" required
                    onChange={e => this.last_name = e.target.value}/>
                    <br></br>
                    <input type="email" className="form-control" placeholder="Email" required 
                    onChange={e => this.email = e.target.value}/>
                    <br></br>
                    <input type="password" className="form-control" placeholder="Password" required 
                    onChange={e => this.password = e.target.value}/>
                    <input type="password" className="form-control" placeholder="Password Confirm" required
                    onChange={e => this.password_confrim = e.target.value}/>
                    <br></br>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
            </form>
          </main>
        );
    }
}

export default Register;