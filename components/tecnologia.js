import React from 'react';

import { FaReact } from 'react-icons/fa';

function service(props) {

    const textCenter = {
        textAlign: "center"
    }

    const corIcon = {
        color: "#FF214F",
    }

    return (
        <div className="arlo_tm_section" id="services">
            <div className="arlo_tm_services">
                <div className="container">
                    <div className="arlo_title_holder">
                        <span>Algumas tecnologias que tenho conhecimento</span>
                        <h3>Tecnologias</h3>
                    </div>
                    <div className="service_inner">
                        <ul>
                            <li>
                                <div className="inner">
                                    <div style={textCenter}>
                                        <i className="fab fa-html5 fa-3x" style={corIcon}></i>
                                        <h3>HTML 5</h3>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="inner">
                                    <div style={textCenter}>
                                        <i className="fab fa-css3 fa-3x" style={corIcon}></i>
                                        <h3>CSS 3</h3>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="inner">
                                    <div style={textCenter}>
                                        <i className="fab fa-js fa-3x" style={corIcon}></i>
                                        <h3>JavaScript</h3>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="inner">
                                    <div style={textCenter}>
                                        <i className="fab fa-react fa-3x" style={corIcon}></i>
                                        <h3>React JS</h3>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="inner">
                                    <div style={textCenter}>
                                        <i className="fas fa-file-code fa-3x" style={corIcon}></i>
                                        <h3>NEXT.js</h3>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="inner">
                                    <div style={textCenter}>
                                        <i className="fas fa-code fa-3x" style={corIcon}></i>
                                        <h3>Jquery</h3>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="inner">
                                    <div style={textCenter}>
                                        <i className="fab fa-sass fa-3x" style={corIcon}></i>
                                        <h3>Sass</h3>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="inner">
                                    <div style={textCenter}>
                                        <i className="fab fa-bootstrap fa-3x" style={corIcon}></i>
                                        <h3>Bootstrap</h3>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="inner">
                                    <div style={textCenter}>
                                        <i className="fas fa-database fa-3x" style={corIcon}></i>
                                        <h3>SQL</h3>
                                    </div>
                                </div>
                            </li>
                            
                            <li>
                                <div className="inner">
                                    <div style={textCenter}>
                                        <i className="fab fa-node fa-3x" style={corIcon}></i>
                                        <h3>Node.JS</h3>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="inner">
                                    <div style={textCenter}>
                                        <i className="fab fa-php fa-3x" style={corIcon}></i>
                                        <h3>PHP</h3>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="inner">
                                    <div style={textCenter}>
                                        <i className="fab fa-java fa-3x" style={corIcon}></i>
                                        <h3>Java</h3>
                                    </div>
                                </div>
                            </li>                  
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default service;