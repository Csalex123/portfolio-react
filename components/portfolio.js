import React from 'react';

import Project from '../components/gallery';

import Portfolio from '../static/images/portfolio/2.jpg';

/* Imagens BResults */
import Bresults1 from '../static/images/jobs/bresults/1.jpg';

/* SegSat */
import Segsat1 from '../static/images/jobs/segsat/1.jpg';

/* Imagens hortas */
import Horta1 from '../static/images/jobs/horttas/1.jpg';

function portfolio(props) {
    return (
        <div className="arlo_tm_section" id="portfolio">
            <div className="arlo_tm_portfolio">
                <div className="container">
                    <div className="arlo_title_holder">
                        <span>Alguns projetos que já desenvolvi</span>
                        <h3>Portfólio</h3>
                    </div>
                    <div className="portfolio_inner">
                        <div className="arlo_tm_portfolio_titles" />
                        <div className="portfolio_filter">
                            <ul>
                                <li><a href="#" data-filter=".berlim_plus">Berlim Plus</a></li>
                                <li><a href="#" data-filter=".bresults">Bresults</a></li>
                                <li><a href="#" data-filter=".coudelaria">Coudelaria</a></li>
                                <li><a href="#" data-filter=".pedras">Pedras do Patacho</a></li>
                                <li><a href="#" data-filter=".segsat">Segsat</a></li>
                                <li><a href="#" data-filter=".horttas">Horttas</a></li>
                                <li><a href="#" data-filter=".living">Living</a></li>
                            </ul>
                        </div>
                        <div className="portfolio_list">
                            <ul className="gallery_zoom">

                                {/* Berlim Plus */}

                                {/* <Project nameClass="berlim_plus" category="Educação" title="Berlim Plus" img={Portfolio} /> */}

                                {/* Bresults */}

                                <Project nameClass="bresults" category="Marketing Digital" title="Bresults" img={Bresults1} />

                                {/* Coudelaria Eventos */}

                                {/* <Project nameClass="coudelaria" category="Eventos" title="Coudelaria" img={Portfolio} /> */}

                                {/* Pedras do Patacho */}

                                {/* <Project nameClass="pedras" category="Hotel" title="Pedras do Patacho" img={Portfolio} /> */}

                                {/* Segsat */}

                                <Project nameClass="segsat" category="Seguro para automóveis" title="Segsat Plus" img={Segsat1} />

                                {/* Horttas */}

                                <Project nameClass="horttas" category="Ecologia" title="Horttas " img={Horta1} />

                                {/* Living */}
                                {/* 
                                <Project nameClass="living" category="E-commerce" title="Living " img={Portfolio} /> */}

                            </ul>
                        </div>

                        <h4 style={{ color: "#fff", paddingBottom: "30px" }}>Confira:</h4>
                        <ul>
                            <li><a style={{ color: "#fff" }} href="http://berlimplus.com.br/" target="_blank">Berlim Plus</a></li>
                            <li><a style={{ color: "#fff" }} href="http://bresults.com.br/" target="_blank">Bresults</a></li>
                            <li><a style={{ color: "#fff" }} href="" target="_blank">Coudelaria</a></li>
                            <li><a style={{ color: "#fff" }} href="" target="_blank">Pedras do Patacho</a></li>
                            <li><a style={{ color: "#fff" }} href="https://segsat.com/segsatplus/" target="_blank">Segsat</a></li>
                            <li><a style={{ color: "#fff" }} href="https://horttas.com.br/" target="_blank">Horttas</a></li>
                            <li><a style={{ color: "#fff" }} href="" target="_blank">Living</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default portfolio;