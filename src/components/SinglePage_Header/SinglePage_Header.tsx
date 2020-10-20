import React from 'react'

import { Link } from "react-router-dom";

import logo from './../../assets/images/Group 232.svg'

import './SinglePage_Header.scss'

export const SinglePage_Header = () => {
    return (
        <div className="SinglePage_Header">
            <div className="container">
                <div className="Header__wrap--another">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="logo" />
                    </Link>
                    <nav className="Another-nav_wrapper">
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
