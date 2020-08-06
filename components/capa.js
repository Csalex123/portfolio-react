import React from 'react';
import Background from '../static/images/slider/code.gif';
import Alex from '../static/images/about/3.jpg';

import { FaAngleDown } from 'react-icons/fa';

function capa(props) {
    return (
        <div className="arlo_tm_section" id="home">
            <div className="arlo_tm_hero_header">
                <div className="hero_image jarallax" data-img-url={Background} data-speed={0} />
                <div className="overlay" />
                <div className="hero_content">
                    <div className="image_wrap">
                        <img src={Alex} alt="Alex Ricardo" />
                        <div className="main" data-img-url={Alex} />
                    </div>
                    <div className="name_holder">
                        <h3>Alex <span>Ricardo</span></h3>
                    </div>
                    <div className="text_typing">
                        <p> <span style={{ color: '#FF214F' }}>Procurando um </span><span className="arlo_tm_animation_text_word" /> </p>
                    </div>
                </div>
                <div className="arlo_tm_arrow_wrap bounce anchor">
                    <a href="#about" ><FaAngleDown size={30} /></a>
                </div>
            </div>
        </div>

    );
}

export default capa;