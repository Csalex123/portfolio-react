import React from 'react';

import Project from '../components/gallery';

import Portfolio from '../static/images/portfolio/2.jpg';

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

                                <Project nameClass="berlim_plus" category="Educação" title="Berlim Plus" img={Portfolio} />

                                {/* Bresults */}

                                <Project nameClass="bresults" category="Marketing Digital" title="Bresults" img={Portfolio} />

                                {/* Coudelaria */}

                                <Project nameClass="coudelaria" category="Eventos" title="Coudelaria" img={Portfolio} />

                                {/* Pedras do Patacho */}

                                <Project nameClass="pedras" category="Hotel" title="Pedras do Patacho" img={Portfolio} />

                                {/* Segsat */}

                                <Project nameClass="segsat" category="Seguro para automóveis" title="Segsat Plus" img={Portfolio} />

                                {/* Horttas */}

                                <Project nameClass="horttas" category="Ecologia" title="Horttas " img={Portfolio} />

                                {/* Living */}

                                <Project nameClass="living" category="E-commerce" title="Living " img={Portfolio} />

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default portfolio;