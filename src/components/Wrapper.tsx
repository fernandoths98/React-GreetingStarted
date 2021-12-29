import axios from "axios";
import { Component, ReactNode, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Menu from "./Menu";
import Nav from "./Nav";

const Wrapper = (props: any) => {

    const [redirect, setRedirect] = useState(false)

    

    useEffect(() => {
        (
          async () => {
            
            try {
                const {data} = await axios.get('users');
            //     fetch('http://localhost:3300/users', {
            //     method: 'GET'
                
            // }).then((res) => {return res.json()})
            } catch (e) {
                setRedirect(true)
            }
            
            // setUser(user);
          }
        )();
      }, []);

      if (redirect) {
          return <Redirect to={"/login"}/>
          
      }

        return (
            <>
                <Nav/>
                <div className="container-fluid">
                    <div className="row">
                    <Menu/>
                    
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4"> 
                        {/* <Dashboard/> */}
                        {props.children}
                        
                    </main>
                    </div>
                </div>
            </>
        )
}

export default Wrapper;