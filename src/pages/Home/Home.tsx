import React from 'react'
import Slider from "react-slick";

//Components
// import { ProductBox } from '../../components/ProductBox/ProductBox';

//styles
import './Home.scss'

import banner1 from './../../assets/images/Peja1.png';
import banner2 from './../../assets/images/Peja2.png';
import banner3 from './../../assets/images/Peja3.png';
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
            {/* <section className="block_section favorite_section">
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
                                    image={product1}
                                />
                            </div>
                            <div className="fav_product_slider_item">
                                <ProductBox
                                    id="1"
                                    isBig
                                    title="Basic Slim Fit T-Shirt"
                                    price="79.99"
                                    image={product1}
                                />
                            </div>
                            <div className="fav_product_slider_item">
                                <ProductBox
                                    id="1"
                                    isBig
                                    title="Basic Slim Fit T-Shirt"
                                    price="79.99"
                                    image={product1}
                                />
                            </div>
                            <div className="fav_product_slider_item">
                                <ProductBox
                                    id="1"
                                    isBig
                                    title="Basic Slim Fit T-Shirt"
                                    price="79.99"
                                    image={product1}
                                />
                            </div>
                            <div className="fav_product_slider_item">
                                <ProductBox
                                    id="1"
                                    isBig
                                    title="Basic Slim Fit T-Shirt"
                                    price="79.99"
                                    image={product1}
                                />
                            </div>
                            <div className="fav_product_slider_item">
                                <ProductBox
                                    id="1"
                                    isBig
                                    title="Basic Slim Fit T-Shirt"
                                    price="79.99"
                                    image={product1}
                                />
                            </div>
                            <div className="fav_product_slider_item">
                                <ProductBox
                                    id="1"
                                    isBig
                                    title="Basic Slim Fit T-Shirt"
                                    price="79.99"
                                    image={product1}
                                />
                            </div>
                            <div className="fav_product_slider_item">
                                <ProductBox
                                    id="1"
                                    isBig
                                    title="Basic Slim Fit T-Shirt"
                                    price="79.99"
                                    image={product1}
                                />
                            </div>
                        </Slider>
                    </div>
                </div>
            </section> */}
        </div>
    )
}
