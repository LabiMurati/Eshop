import React from 'react'

import './Singlepage.scss'


import singlepagebanner from './../../assets/images/singlepage-banner.png'


export const Singlepage = () => {
    return (
        <div className="singlepage">
            <div className="container">
                <section className="block_section t-shirt">
                    <div className="text__area">
                        <div className="container">
                            <div className="column-6">
                                <img src={singlepagebanner} />
                         </div>
                            <div className="t-shirt__text">
                                    <h2>T-Shirt Summer Vibes</h2>
                                    <span>$89.99</span>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                            </div>
                        </div>
                </section>
            </div>
        </div>
    )
}
