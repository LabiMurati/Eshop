import React from 'react'

import './Singlepage.scss'


import singlepagebanner from './../../assets/images/singlepage-banner.png'


export const Singlepage = () => {
    return (
        <div className="singlepage">
            <div className="container">
                <section className="block_section t-shirt">
                        <div className="container">
                            <div className="column-6">
                                <img src={singlepagebanner} />
                            </div>
                        </div>
                </section>
            </div>
        </div>
    )
}
