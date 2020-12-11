import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
  } from "react-router-dom";


export default function Header(){

    return(
        <Router>
            <nav className="menu">
                <ul>
                    <li>
                        <NavLink to="/" activeClassName="active">
                            Overview
                        </NavLink>
                        <NavLink to="/create" activeClassName="active">
                            Create
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route path="/">
                <h1>Overview</h1>
                </Route>
                <Route path="/create">
                <h1>Create</h1>
                </Route>

            </Switch>

        </Router>
    )
}