import React from 'react';
import Menu from '../components/menu';
import Footer from '../components/footer';

import { AnimatePresence, motion } from 'framer-motion';

import Ilustracao from '../static/images/sobre/ilustracao.svg';
import FotoAlex from '../static/images/sobre/alex.jpg';

import '../static/styles/sass/sobre.scss';

function sobre(props) {

    const pageTransition = {
        type: "tween",
        ease: 'anticipate',
        duration: 1
    }



    return (
        <>
            <Menu title="Sobre" description="Sem Descrição" />
            <div className="about container" style={{ overflowX: "hidden"}}>
            <h1>Sobre</h1>

            <div className="about__content row align-items-center mt-2 ">

                <motion.section
                    initial={{ opacity: 0, x: "-100vw", scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: "100vw", scale: 1.2 }}
                    transition={pageTransition}
                    className="col-xs-12 col-md-12 col-lg-6">
                    <img className="img-fluid" src={Ilustracao} alt="Ilustração" />
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, x: "100vw", scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: "-100vw", scale: 1.2 }}
                    transition={pageTransition}
                    className="about__information col-xs-12 col-md-12 col-lg-6">
                    <div className="row align-items-center text-center">
                        <div className="col-xs-12 col-md-6">
                            <h2 className="fadeIn">Alex Ricardo</h2>
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <img className="img-fluid img-thumbnail" src={FotoAlex} alt="Alex Ricardo" />
                        </div>
                    </div>

                    <h5 className="text-center mt-4 fadeIn" > Desenvolvedor Web</h5>

                    <div className="pt-4 fadeIn">
                        <p>Meu nome é Alex Ricardo e eu desenvolvo/programo sites. Me considero um víciado e apaixonado por códigos! Eu venho projetando e codificando na web desde 2017.</p>
                        <p>Minha primeira experiência com as tecnologias web apareceu quando eu estudava no Instituto Federal de educação, ciência e tecnologia de Pernambuco(IFPE) e estava cursando Técnico em informática para Internet.</p>
                        <p>No decorrer da minha carreira da minha carreira profissional, descobrir novas maneiras de desenvolver funcionalidades na web. Eventualmente, isso me levou a construir websites elegantes, rápidos, responsivos e com usabilidade.</p>
                        <p>Aprimorei meus conhecimentos aprendendo diversas tecnologias atuais que são utilizadas por diversas empresas(Facebook, Uber, Instagram, Spotify..) para auxiliar nas criações dos websites, até então construir alguns projetos e os mesmos podem ser encontrados no meu <a href="https://github.com/Csalex123" target="_blank">GitHub.</a></p>

                        <b className="pt-5">Algumas tecnologias que tenho conhecimento:</b>

                        <ul>
                            <li><b>Front-end: </b> Html 5 • Css3 • JavaScript </li>
                            <li><b>Back-end: </b> Php 7 • Java • Node.JS • SQL</li>
                            <li><b>Frameworks/Bibliotecas:  </b> React Js • React Native • Boostrap • Materialize • Jquery • Material Design • Frame Motion • Express • Google Maps Api • Axios • Sass • Codeigniter 3 • MySql </li>
                        </ul>

                    </div>

                </motion.section>

            </div>
        </div>

        <Footer />
        </>
    );
}

export default sobre;