import React from 'react';
import { Link } from "react-router-dom";

import logo from'./../../assets/images/Group 232.png';


import "./Header.scss"

export const Header = () => {
    return (
        <div className="Header">
            <div className="container">
                <div className="Header__wrap">
                    <Link to="/">
                        {/* <img src={logo} alt="Logo" className="logo" /> */}
                    </Link>
                    <nav className="nav_wrapper">
                        <ul>
                            <li><Link to="/alkool">Alkoolike</Link></li>
                            <li><Link to="/alkool-free">Jo Alkoolike</Link></li>
                            
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}
