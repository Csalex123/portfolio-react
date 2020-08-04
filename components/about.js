import React from 'react';
import Gift from '../static/images/svg/gift.svg';
import Card from '../static/images/about/550x650.jpg';
import ImgAbout from '../static/images/about/3.jpg'

import { FaGift, FaLocationArrow, FaCalendar, FaGamepad } from 'react-icons/fa';

function about(props) {
    return (
        <div className="arlo_tm_section" id="about">
            <div className="arlo_tm_about_wrap_all">
                <div className="arlo_tm_about">
                    <div className="container">
                        <div className="arlo_title_holder">
                            <span>Informação principal</span>
                            <h3>Sobre</h3>
                        </div>
                        <div className="about_inner">
                            <div className="leftbox">
                                <div className="about_image_wrap parallax" data-relative-input="true">
                                    <div className="image layer" data-depth="0.1">
                                        <img src={Card} alt="Card" />
                                        <div className="inner" data-img-url={ImgAbout} />
                                    </div>
                                    <div className="border layer" data-depth="0.2">
                                        <img src="../static/images/about/550x650.jpg" alt />
                                        <div className="inner" />
                                    </div>
                                </div>
                            </div>
                            <div className="rightbox">
                                <div className="about_title">
                                    <h3>I'm Albert Walkers and <span className="arlo_tm_animation_text_word" /></h3>
                                </div>
                                <div className="text">
                                    <p>Hi! My name is <span>Albert Walkers</span>. I am a Web Developer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
                                </div>
                                <div className="about_short_contact_wrap">
                                    <ul>
                                        <li>
                                            <FaGift style={{ color: "#FF214F", marginRight: "10px" }} />
                                            <span><label> Birthday:</label> 01.07.1990</span>
                                        </li>
                                        <li>
                                            <img className="svg" src="../static/images/svg/calendar-4.svg" alt />
                                            <span><label>Age:</label> 29</span>
                                        </li>
                                        <li>
                                            <img className="svg" src="../static/images/svg/location-1.svg" alt />
                                            <span><label>Location:</label> <a className="href_location" href="#">Ave 11, New York, USA</a></span>
                                        </li>
                                        <li>
                                            <img className="svg" src="../static/images/svg/game-controller-2.svg" alt />
                                            <span><label>Interests:</label> Playstation, Reading</span>
                                        </li>
                                        <li>
                                            <img className="svg" src="../static/images/svg/study-5.svg" alt />
                                            <span><label>Study:</label> <a className="href_location" href="#"> Univercity of Chicago</a></span>
                                        </li>
                                        <li>
                                            <img className="svg" src="../static/images/svg/degree-1.svg" alt />
                                            <span><label>Degree:</label> Master</span>
                                        </li>
                                        <li>
                                            <img className="svg" src="../static/images/svg/message-3.svg" alt />
                                            <span><label>Mail:</label> <a href="mailto:example@gmail.com">mymail@gmail.com</a></span>
                                        </li>
                                        <li>
                                            <img className="svg" src="../static/images/svg/call-2.svg" alt />
                                            <span><label>Phone:</label> <a href="tel:+77 022 177 05 05">+77 022 177 05 05</a></span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="buttons">
                                    <ul>
                                        <li><a href="#"><span>Download CV</span></a></li>
                                        <li><a href="#"><span>Send Message</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default about;