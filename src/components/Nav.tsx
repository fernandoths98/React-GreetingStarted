import axios from "axios";
import { Component, ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../models/user";
import Users from "../pages/Users";

const Nav = () => {
  const [user, setUser] = useState(new User());

  useEffect(() => {
    (
      async () => {
        const {data} = await axios.get('user');
        setUser(new User(
          data.id,
          data.first_name,
          data.last_name,
          data.email,
          data.role
        ));
        // fetch('http://localhost:3300/users', {
        //     method: 'GET'
            
        // }).then((res) => {return res.json()})
        
      }
    )();
  }, []);
    
        // const logout = () => {
        //   document.cookie = `login= ; expires = Thu, 01 Jan 1970 00:00:00 GMT`
        //   document.cookie = `firstName= ; expires = Thu, 01 Jan 1970 00:00:00 GMT`
        //   window.location.reload()
        // }

        const logout = async () => {
          await axios.post('logout', {})
        }

        return (
          <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
              <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Company name</a>
              
              <ul className="my-2 my-md-0 mr-md-3">
                <Link to={"/profile"} className="p-2 text-white text-decoration-none">{user.name} </Link>
                <Link to={"/login"} className="p-2 text-white text-decoration-none"
                onClick={logout}>Sign out </Link>
              </ul>
          </nav>
        );
    }

    // const mapStateToProps = (state: {user: User}) => {
    //   return{
    //       user: state.user
    //   }
    // }

export default Nav;