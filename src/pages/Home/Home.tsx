import React from 'react'

//Components
import banner2 from './../../assets/images/home_banner.jpg';
//styles
import './Home.scss'

export const Home = () => {
    return (
        <div className="Home">
            <div className="container">
                <div className="Header__wrap">
                    {/* <Link to="/"> */}
                        {/* <img src={logo} alt="Logo" className="logo"/> */}
                    {/* </Link> */}
                </div>
                <h1>Pije Alkolike</h1>
                <h1>Pije Jo Alkolike</h1>
            </div>
        </div>
    )
}
