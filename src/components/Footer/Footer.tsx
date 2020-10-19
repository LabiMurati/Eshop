import React from 'react'

//styles
import './Footer.scss'
//images
import facebook from './../../assets/images/facebook-footer.png';
import twitter from './../../assets/images/twitter-footer.png';
import linkedin from './../../assets/images/004-linkedin-logo.png';
import instagram from './../../assets/images/instagram-footer.png';
import youtube from './../../assets/images/youtube-footer.png';
import icon from './../../assets/images/icon-footer.png';



export const Footer = () => {
    return (
        <div className="Footer">
            <section className="block_section footer_section">
                <div className="container">
                    <div className="logo">
                    <img src={icon}  alt="icon"/>
                    <h2><b>E</b>-Shop</h2>
                    </div>
                    <div className="footer__left">
                         <p>House My Brand  designs clothing for the young, the old & everyone in between – but most importantly, for the fashionable</p>
                    </div>
                    <div className="footer__icons">
                    <img src={facebook}  alt="fb"/>
                    <img src={twitter}  alt="tw"/>
                     <img src={linkedin} alt="inn"/>
                    <img src={instagram}  alt="ig"/> 
                    <img src={youtube}  alt="yt"/>
                    </div>
                </div>
            </section>
            <p>DESIGN BY ICEO.CO - © 2019. ALL RIGHTS RESERVED.</p>
        </div>
    )
}
