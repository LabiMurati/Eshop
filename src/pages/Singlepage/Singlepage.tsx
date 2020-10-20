import React, { useState, useEffect } from 'react'
import * as API from './../../api/api';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import './Singlepage.scss'
import { ProductBox } from '../../components/ProductBox/ProductBox';

import subscribe from '../../assets/images/blake-wisz-GFrBMipOd_E-unsplash.png';
import slider1 from './../../assets/images/photo-slider_1.png';
import slider2 from './../../assets/images/photo-slider_2.png';
import slider3 from './../../assets/images/photo-slider_3.png';
import slider4 from './../../assets/images/photo-slider_4.png';
import singlepagebanner from './../../assets/images/singlepage-banner.png';
import { SinglePage_Header } from '../../components/SinglePage_Header/SinglePage_Header';

//Components
const settingsFavorite = {
    dots: false,
    nav: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
};

export interface StateProps {
    loading: boolean;
    food?: API.Hints[],
    error?: string;
}

export const Singlepage = () => {
    const [state, setState] = useState<StateProps>({
        loading: true,
        food: [],
        error: undefined
    })

    useEffect(() => {
        loadFood();
    })

    const loadFood = async () => {
        try {
            const res = await API.getFood(

            )
            setState({
                ...state,
                loading: false,
                food: res.data?.hints
            })
        } catch (error) {
            setState({
                ...state,
                loading: false,
                error: error.message
            })
        }
    }
    return (
        <div className="singlepage">
            <SinglePage_Header/>
            <div className="container">
                <section className="block_section t-shirt">
                    <div className="text__area">
                        <div className="container">
                            <div className="column-6">
                                <img className="singlepagebanner" src={singlepagebanner} />
                         </div>
                            <div className="t-shirt__text">
                                    <h2>T-Shirt Summer Vibes</h2>
                                    <span>$89.99</span>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                            </div>
                        </div>
                </section>
                {/* <section className="block_section favorite_section">
                <div className="container">
                    <div className="main_title">
                        <h4>Your Favorite</h4>
                    </div>
                    <div className="favorite_slider">
                        <Slider {...settingsFavorite}>
                            <div className="fav_product_slider_item">
                                <Link to="/src/pages/Singlepage/">
                                <ProductBox
                                    id="1"
                                    isBig
                                    title="Basic Slim Fit T-Shirt"
                                    price="$79.99"
                                    image={slider1}
                                />
                                </Link>
                            </div>
                            <div className="fav_product_slider_item">
                                <ProductBox
                                    id="1"
                                    isBig
                                    title="Basic Slim Fit T-Shirt"
                                    price="$79.99"
                                    image={slider2}
                                />
                            </div>
                            <div className="fav_product_slider_item">
                                <ProductBox
                                    id="1"
                                    isBig
                                    title="Basic Slim Fit T-Shirt"
                                    price="$79.99"
                                    image={slider3}
                                />
                            </div>
                            <div className="fav_product_slider_item">
                                <ProductBox
                                    id="1"
                                    isBig
                                    title="Basic Slim Fit T-Shirt"
                                    price="$79.99"
                                    image={slider4}
                                />
                            </div>
                            <div className="fav_product_slider_item">
                                <ProductBox
                                    id="1"
                                    isBig
                                    title="Basic Slim Fit T-Shirt"
                                    price="$79.99"
                                    image={slider1}
                                />
                            </div>
                            <div className="fav_product_slider_item">
                                <ProductBox
                                    id="1"
                                    isBig
                                    title="Basic Slim Fit T-Shirt"
                                    price="$79.99"
                                    image={slider2}
                                />
                            </div>
                            <div className="fav_product_slider_item">
                                <ProductBox
                                    id="1"
                                    isBig
                                    title="Basic Slim Fit T-Shirt"
                                    price="$79.99"
                                    image={slider3}
                                />
                            </div>
                            <div className="fav_product_slider_item">
                                <ProductBox
                                    id="1"
                                    isBig
                                    title="Basic Slim Fit T-Shirt"
                                    price="$79.99"
                                    image={slider4}
                                />
                            </div>
                        </Slider>
                    </div>
                </div>
            </section> */}
            <section className="block_section favorite_section">
                <div className="container">
                    <div className="main_title">
                        <h3>Your Favorite</h3>
                    </div>
                    {
                        state.food?.slice(0, 1)?.map((foodItem: API.Hints) => {
                            return (
                                <div className="favorite_slider" key={foodItem.food.foodId}>
                                    <Slider {...settingsFavorite}>
                                        <div className="favorite_product_item">
                                            <ProductBox isBig
                                                id={foodItem.food.foodId}
                                                title={foodItem.food.label}
                                                price={foodItem.food.category}
                                                image={foodItem.food.image}
                                            />
                                        </div>
                                        <div className="favorite_product_item">
                                            <ProductBox isBig
                                                id={foodItem.food.foodId}
                                                title={foodItem.food.label}
                                                price={foodItem.food.category}
                                                image={foodItem.food.image}
                                            />
                                        </div>
                                        <div className="favorite_product_item">
                                            <ProductBox isBig
                                                id={foodItem.food.foodId}
                                                title={foodItem.food.label}
                                                price={foodItem.food.category}
                                                image={foodItem.food.image}
                                            />
                                        </div>
                                        <div className="favorite_product_item">
                                            <ProductBox isBig
                                                id={foodItem.food.foodId}
                                                title={foodItem.food.label}
                                                price={foodItem.food.category}
                                                image={foodItem.food.image}
                                            />
                                        </div>
                                        <div className="favorite_product_item">
                                            <ProductBox isBig
                                                id={foodItem.food.foodId}
                                                title={foodItem.food.label}
                                                price={foodItem.food.category}
                                                image={foodItem.food.image}
                                            />
                                        </div>
                                        <div className="favorite_product_item">
                                            <ProductBox isBig
                                                id={foodItem.food.foodId}
                                                title={foodItem.food.label}
                                                price={foodItem.food.category}
                                                image={foodItem.food.image}
                                            />
                                        </div>
                                        <div className="favorite_product_item">
                                            <ProductBox isBig
                                                id={foodItem.food.foodId}
                                                title={foodItem.food.label}
                                                price={foodItem.food.category}
                                                image={foodItem.food.image}
                                            />
                                        </div>
                                        <div className="favorite_product_item">
                                            <ProductBox isBig
                                                id={foodItem.food.foodId}
                                                title={foodItem.food.label}
                                                price={foodItem.food.category}
                                                image={foodItem.food.image}
                                            />
                                        </div>
                                    </Slider>
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </section>
                <section className="subscribe">
                <div className="container">
                    <div className="subscribe__text">
                        <h2>Subscribe to our newsletter and receive exclusive offers every week</h2>
                        <form>
                        <input type="email" className="subscribe_input" name="name" placeholder="Enter your email" />
                        <button type="submit" className="subscribe_button">SUBSCRIBE</button>
                        </form> 
                    </div>
                    <img src={subscribe} alt="img" />
                </div>
            </section>
       
            </div>
        </div>
    )
}
