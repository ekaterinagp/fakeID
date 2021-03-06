import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
  } from "react-router-dom";
  import Overview from '../pages/Overview'
  import CreateUser from '../pages/CreateUser'
  import SingleUser from '../pages/SingleUser'
  import InfoIcon from '../components/InfoIcon'
  import './../css/header.css'



export default function Header(){

    return(
        <Router>
            <nav className="menu">
                <NavLink exact to="/"  className="logo">
                    FakeID
                </NavLink>
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="active">
                            Overview
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/create" activeClassName="active">
                            Create
                        </NavLink>
                    </li>
                    <li>
                        <InfoIcon/>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route exact path="/">
                    <Overview/>
                </Route>
                 <Route path="/create">
                    <CreateUser/>
                </Route>
                <Route path="/user/:id"
                    component={(props) =>      <SingleUser {...props}/> }
                />

            </Switch>

        </Router>
    )
}