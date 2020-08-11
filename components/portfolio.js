import React from 'react';

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

                                <li className="berlim_plus">
                                    <div className="inner">
                                        <div className="entry arlo_tm_portfolio_animation_wrap" data-title="Berlim Plus" data-category="Educação">
                                            <a className="popup-youtube" href="https://www.youtube.com/watch?v=ICr_bOuM9Zo">
                                                <img src="img/portfolio/600x600.jpg" alt="portfolio" />
                                                <div className="main_image" data-img-url="img/portfolio/1.jpg" />
                                            </a>
                                        </div>
                                    </div>
                                </li>

                                <li className="berlim_plus">
                                    <div className="inner">
                                        <div className="entry arlo_tm_portfolio_animation_wrap" data-title="Berlim Plus" data-category="Educação">
                                            <a className="popup-youtube" href="https://www.youtube.com/watch?v=ICr_bOuM9Zo">
                                                <img src="img/portfolio/600x600.jpg" alt="portfolio" />
                                                <div className="main_image" data-img-url="img/portfolio/1.jpg" />
                                            </a>
                                        </div>
                                    </div>
                                </li>

                                {/* Bresults */}

                                <li className="bresults">
                                    <div className="inner">
                                        <div className="entry arlo_tm_portfolio_animation_wrap" data-title="Bresults" data-category="Marketing Digital">
                                            <a className="zoom" href="img/portfolio/2.jpg">
                                                <img src="img/portfolio/600x600.jpg" alt="portfolio" />
                                                <div className="main_image" data-img-url="img/portfolio/2.jpg" />
                                            </a>
                                        </div>
                                    </div>
                                </li>

                                {/* Coudelaria */}

                                <li className="coudelaria">
                                    <div className="inner">
                                        <div className="entry arlo_tm_portfolio_animation_wrap" data-title="Coudelaria" data-category="Eventos">
                                            <a className="zoom" href="img/portfolio/8.webp">
                                                <img src="img/portfolio/600x600.jpg" alt="portfolio" />
                                                <div className="main_image" data-img-url="img/portfolio/8.webp" />
                                            </a>
                                        </div>
                                    </div>
                                </li>

                                {/* Pedras do Patacho */}

                                <li className="pedras">
                                    <div className="inner">
                                        <div className="entry arlo_tm_portfolio_animation_wrap" data-title="Pedras do Patacho" data-category="Hotel">
                                            <a className="zoom" href="img/portfolio/4.jpg">
                                                <img src="img/portfolio/600x600.jpg" alt="portfolio" />
                                                <div className="main_image" data-img-url="img/portfolio/4.jpg" />
                                            </a>
                                        </div>
                                    </div>
                                </li>

                                {/* Segsat */}

                                <li className="segsat">
                                    <div className="inner">
                                        <div className="entry arlo_tm_portfolio_animation_wrap" data-title="Segsat Plus" data-category="Seguro de carros">
                                            <a className="zoom" href="img/portfolio/5.jpg">
                                                <img src="img/portfolio/600x600.jpg" alt="portfolio" />
                                                <div className="main_image" data-img-url="img/portfolio/5.jpg" />
                                            </a>
                                        </div>
                                    </div>
                                </li>

                                {/* Horttas */}

                                <li className="horttas">
                                    <div className="inner">
                                        <div className="entry arlo_tm_portfolio_animation_wrap" data-title="Horttas" data-category="Ecologia">
                                            <a className="zoom" href="img/portfolio/5.jpg">
                                                <img src="img/portfolio/600x600.jpg" alt="portfolio" />
                                                <div className="main_image" data-img-url="img/portfolio/5.jpg" />
                                            </a>
                                        </div>
                                    </div>
                                </li>

                                {/* Living */}

                                <li className="living">
                                    <div className="inner">
                                        <div className="entry arlo_tm_portfolio_animation_wrap" data-title="Living" data-category="E-commerce">
                                            <a className="zoom" href="img/portfolio/5.jpg">
                                                <img src="img/portfolio/600x600.jpg" alt="portfolio" />
                                                <div className="main_image" data-img-url="img/portfolio/5.jpg" />
                                            </a>
                                        </div>
                                    </div>
                                </li>



                                {/* <li className="image">
                                    <div className="inner">
                                        <div className="entry arlo_tm_portfolio_animation_wrap" data-title="Popup Image" data-category="Image">
                                            <a className="zoom" href="img/portfolio/6.jpg">
                                                <img src="img/portfolio/600x600.jpg" alt="portfolio" />
                                                <div className="main_image" data-img-url="img/portfolio/6.jpg" />
                                            </a>
                                        </div>
                                    </div>
                                </li> */}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default portfolio;