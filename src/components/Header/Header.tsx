import React from 'react';
import { Link, useHistory } from "react-router-dom";

import logo from './../../assets/images/Group 232.png';

//styles
import "./Header.scss"

export const Header = () => {
    const history = useHistory()
    const isHomePage = history.location.pathname === '/Singlepage'; 

    return (
        <div className={`Header${isHomePage && ' Header--Home' }`}>
            <div className="container">
                <div className="Header__wrap">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="logo" />
                    </Link>
                    <nav className="nav_wrapper">
                        <ul>
                            <li><Link to="/Singlepage">Alkoolike</Link></li>
                            <li><Link to="/ProductFilters">Jo Alkoolike</Link></li>
                           
                        </ul>
                    </nav> 
                </div>
            </div>
        </div>
    )
}
