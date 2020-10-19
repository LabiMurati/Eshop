import React from 'react'
import Slider from "react-slick";

//Components

import { ProductBox } from '../../components/ProductBox/ProductBox';



//styles
import './Home.scss'

import banner1 from './../../assets/images/Peja1.png';
import banner2 from './../../assets/images/Peja2.png';
import banner3 from './../../assets/images/Peja3.png';
import banner4 from './../../assets/images/banner4.png';
import banner5 from './../../assets/images/banner5.png';
import slider1 from './../../assets/images/photo-slider_1.png';
import slider2 from './../../assets/images/photo-slider_2.png';
import slider3 from './../../assets/images/photo-slider_3.png';
import slider4 from './../../assets/images/photo-slider_4.png';

// stlyes



const settingsBanner = {
    dots: false,
    nav: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};
const settingsFavorite = {
    dots: false,
    nav: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
};

export const Home = () => {
    return (
        <div className="Home">
             <section className="block_section banner_section">
                <Slider {...settingsBanner}>
                    <div className="banner">
                        <img src={banner1} alt="banner1" />
                        <div className="banner__content">
                            <div className="container">
                                <h2>Gjithmonë më e mira</h2>
                            </div>
                        </div>
                    </div>
                    <div className="banner">
                        <img src={banner2} alt="banner1" />
                        <div className="banner__content">
                            <div className="container">
                                <h2>Gjithmonë më e mira</h2>
                            </div>
                        </div>
                    </div>
                    <div className="banner">
                        <img src={banner3} alt="banner1" />
                        <div className="banner__content">
                            <div className="container">
                                <h2>Gjithmonë më e mira</h2>
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>
            <section className="block_section arrivals">
                <div className="container">
                    <div className="row has_gutter">
                        <div className="column-6">
                            <div className="box">
                                <div className="box__thumb">
                                    <img src={banner4} alt="" />
                                </div>
                                <div className="box__content">
                                    <h3>New arrivals are now in!</h3>
                                    <button>Show Collection</button>
                                </div>
                            </div>
                        </div>
                        <div className="column-6">
                            <div className="box">
                                <div className="box__thumb">
                                    <img src={banner5} alt="" />
                                </div>
                                <div className="box__content">
                                    <h3>Basic t-shirts $29,99</h3>
                                    <button>More Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="block_section favorite_section">
                <div className="container">
                    <div className="main_title">
                        <h4>Your Favorite</h4>
                    </div>
                    <div className="favorite_slider">
                        <Slider {...settingsFavorite}>
                            <div className="fav_product_slider_item">
                                <ProductBox
                                    id="1"
                                    isBig
                                    title="Basic Slim Fit T-Shirt"
                                    price="79.99"
                                    image={slider1}
                                />
                            </div>
                            <div className="fav_product_slider_item">
                                <ProductBox
                                    id="1"
                                    isBig
                                    title="Basic Slim Fit T-Shirt"
                                    price="79.99"
                                    image={slider2}
                                />
                            </div>
                            <div className="fav_product_slider_item">
                                <ProductBox
                                    id="1"
                                    isBig
                                    title="Basic Slim Fit T-Shirt"
                                    price="79.99"
                                    image={slider3}
                                />
                            </div>
                            <div className="fav_product_slider_item">
                                <ProductBox
                                    id="1"
                                    isBig
                                    title="Basic Slim Fit T-Shirt"
                                    price="79.99"
                                    image={slider4}
                                />
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </div>
    )
}
