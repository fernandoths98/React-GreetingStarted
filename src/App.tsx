import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Menu from "./components/Menu";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route } from "react-router-dom";
import Users from "./pages/Users";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreateUser from "./pages/CreateUser";
import EditUser from "./pages/EditUser";
import Roles from "./pages/roles/Roles";
import RoleCreate from "./pages/roles/RoleCreate";
import RoleUpdate from "./pages/roles/RoleUpdate";
import Products from "./pages/products/products";
import ProductCreate from "./pages/products/ProductCreate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path={'/'} exact component={Dashboard} />
        <Route path={'/users'} exact component={Users} />
        <Route path={'/register'} component={Register} />
        <Route path={'/login'} component={Login} />
        <Route path={'/users/create'} component={CreateUser}/>
        <Route path={'/users/:id/edit'} component={EditUser} />
        <Route path={'/roles'} exact component={Roles}/>
        <Route path={'/roles/create'} exact component={RoleCreate} />
        <Route path={'/roles/:id/update'} exact component={RoleUpdate} />
        <Route path={'/products'} exact component={Products} />
        <Route path={'/products/createProducts'} exact component={ProductCreate} />
      </BrowserRouter>
    </div>
  );
}

export default App;
