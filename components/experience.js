import React from 'react';

import deGree from '../static/images/svg/degree-5.svg';
import Portfolio from '../static/images/svg/portfolio.svg';

function experience(props) {
    return (
        <div className="arlo_tm_section" id="experience" style={{backgroundColor : "#191919"}}>
            <div className="arlo_tm_timeline">
                <div className="container">
                    <div className="arlo_title_holder">
                        <span></span>
                        <h3>Experiência</h3>
                    </div>
                    <div className="timeline_inner">
                        <div className="left">
                            <ul>
                                <li>
                                    <div className="inner">
                                        <img className="svg" src={deGree} alt="Degree" />
                                        <p className="year">2019 - 2021</p>
                                        <h3 className="title">Centro Universitário Maurício de Nassau</h3>
                                        <p className="text">Graduação em análise e Desenvolvimento de Software</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="inner">
                                        <img className="svg" src={deGree} alt="Degree" />
                                        <p className="year">2017 - 2018</p>
                                        <h3 className="title">Instituto Federal de Educação, Ciência e Tecnologia de Pernambuco</h3>
                                        <p className="text">Técnico em Informática para Internet</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="right">
                            <ul>
                                <li>
                                    <div className="inner">
                                        <img className="svg" src={Portfolio} alt="Portfolio" />
                                        <p className="year">2019 - Atual</p>
                                        <h3 className="title">Programador WEB</h3>
                                        <p className="text">Atualmente trabalho em uma Agência de Marketing Digital(Berlim Digital) desenvolvendo Landing Pages, Websites e E-commercers </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default experience;