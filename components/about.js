import React from 'react';

import Card from '../static/images/about/550x650.jpg';
import ImgAbout from '../static/images/about/3.jpg'

import { FaCloudDownloadAlt, FaEnvelope } from 'react-icons/fa';

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
                                </div>
                                <div className="text">
                                    <p>Meu nome é <span>Alex Ricardo</span> e eu desenvolvo/programo sites. Me considero um víciado e apaixonado por códigos! Eu venho projetando e codificando na web desde 2017.</p>
                                    <p>Minha primeira experiência com as tecnologias web apareceu quando eu estudava no Instituto Federal de educação, ciência e tecnologia de Pernambuco(IFPE) e estava cursando Técnico em informática para Internet.</p>
                                    <p>No decorrer da minha carreira da minha carreira profissional, descobrir novas maneiras de desenvolver funcionalidades na web. Eventualmente, isso me levou a construir websites elegantes, rápidos, responsivos e com usabilidade.</p>
                                    <p>Aprimorei meus conhecimentos aprendendo diversas tecnologias atuais que são utilizadas por diversas empresas(Facebook, Uber, Instagram, Spotify..) para auxiliar nas criações dos websites, até então construir alguns projetos e os mesmos podem ser encontrados nesse portfólio ou no meu <span><a style={{ color: "#fff" }} href="https://github.com/Csalex123" target="_blank">GitHub.</a></span></p>
                                </div>

                                <div className="buttons">
                                    <ul>
                                        <li><a href="../static/pdf/alexricardo.pdf" download ><span><FaCloudDownloadAlt /> Baixar Currículo</span></a></li>
                                        <li><a href="#contact"><span><FaEnvelope /> Entrar em contato</span></a></li>
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