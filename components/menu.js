import React from 'react';
import LogoMobile from '../static/images/logo/mobile.png';

import {
    FaFacebook,
    FaLinkedin,
    FaInstagram,
    FaGithub,
    FaHome,
    FaUserGraduate,
    FaLaptopCode,
    FaNetworkWired,
    FaEnvelope,
    FaClipboardCheck,


} from 'react-icons/fa';


function menu(props) {

    const corIcon = {
        color: "#FF214F",
    }

    return (

        <>

            <div className="arlo_tm_popup_news scrollable">
                <a className="closer" href="#">Close</a>
                <div className="container">
                    <div className="news_inner" />
                </div>
            </div>


            {/* Topbar */}
            <div className="arlo_tm_topbar">
                <div className="topbar_inner">
                    <div className="container">
                        <div className="topbar_in">
                            <div className="logo">
                                <a href="/"><img src={LogoMobile} alt="Logo" /></a>
                            </div>
                            <div className="trigger">
                                <a href="#">
                                    <span className="menu"><i className="fas fa-bars" style={{ fontSize: '32px !important' }} /></span>
                                    <span className="close"><i className="fas fa-times" style={{ fontSize: '32px !important' }} /></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown">
                    <div className="container">
                        <div className="dropdown_inner">
                            <ul>
                                <li><a href="#home"><FaHome style={corIcon} />Home</a></li>
                                <li><a href="#about"><FaUserGraduate style={corIcon} /> Sobre</a></li>
                                <li><a href="#services"><FaLaptopCode style={corIcon} /> Tecnologias</a></li>
                                <li><a href="#portfolio"><FaNetworkWired  style={corIcon}/> Portfólio</a></li>
                                <li><a href="#experience"><FaClipboardCheck  style={corIcon}/> Experiência</a></li>
                                <li><a href="#contact"><FaEnvelope style={corIcon} /> Contato</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Topbar */}

            {/* LEFTPART */}
            <div className="arlo_tm_leftpart">
                <div className="inner">
                    <div className="logo">
                        <a className="dark" href="#"><img src="static/images/logo/logo.png" alt="logo" /></a>
                        <a className="light" href="#"><img src="static/images/logo/light.png" alt="logo" /></a>
                    </div>
                    <div className="menu scrollable">
                        <ul>
                            <li><a href="#home"><FaHome style={corIcon} /> Home</a></li>
                            <li><a href="#about"><FaUserGraduate style={corIcon} /> Sobre</a></li>
                            <li><a href="#services"><FaLaptopCode style={corIcon} /> Tecnologias</a></li>
                            <li><a href="#portfolio"><FaNetworkWired  style={corIcon}/> Portfólio</a></li>
                            <li><a href="#experience"><FaClipboardCheck  style={corIcon}/> Experiência</a></li>
                            <li><a href="#contact"><FaEnvelope style={corIcon} /> Contato</a></li>
                        </ul>
                    </div>
                    <div className="bottom" >
                        <div className="social" >
                            <ul>
                                <li><a href="#"><FaFacebook size="22px" /></a></li>
                                <li><a href="#"><FaLinkedin size="22px" /></a></li>
                                <li><a href="#"><FaInstagram size="22px" /></a></li>
                                <li><a href="#"><FaGithub size="22px" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="resize">
                        <a href="#"><span /></a>
                    </div>
                </div>
            </div>

        </>


    );
}

export default menu;