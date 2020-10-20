import React from 'react'

//styles
import './Footer.scss'

import facebook from './../../assets/images/facebook-footer.png';
import twitter from './../../assets/images/twitter-footer.png';
import linkedin from './../../assets/images/004-linkedin-logo.png';
import instagram from './../../assets/images/instagram-footer.png';
import youtube from './../../assets/images/youtube-footer.png';
import icon from './../../assets/images/icon-footer.png';

export const Footer = () => {
    return (
        <div className="Footer">
            <div className="container">
                <div className="Footer_wrap">
                    <div className="Footer__first">
                        <h2><b>E</b>-Shop</h2>
                        <img src={icon} alt="" />
                        <p>House My Brand designs clothing for the young, the old &
                        everyone in between – but most importantly, for the fashionable</p>
                        <div className="Footer__icons">
                            <img src={facebook} alt="fb" />
                            <img src={twitter} alt="tw" />
                            <img src={linkedin} alt="ln" />
                            <img src={instagram} alt="ig" />
                            <img src={youtube} alt="yt" />
                        </div>
                    </div>
                    <ul>
                        <h3>Shopping Online</h3>
                        <li>Order Status</li>
                        <li>Shipping and Delivery</li>
                        <li>Returns</li>
                        <li>Payment Options</li>
                        <li>Contact Us</li>
                    </ul>
                    <ul>
                        <h3>Information</h3>
                        <li>Gift Cards</li>
                        <li>Find a store</li>
                        <li>NewsLetter</li>
                        <li>Become a member</li>
                        <li>Site Feedback</li>
                    </ul>
                    <ul>
                        <h3>Contact</h3>
                        <li>store@uikit.com</li>
                        <li>Hotline: 585158</li>
                    </ul>
                </div>
            </div>
        
            <h5>DESIGN BY ICEO.CO - © 2019. ALL RIGHTS RESERVED.</h5>
        </div>
    )
}