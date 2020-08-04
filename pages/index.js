import React from 'react';

// import Document, { Html, Head, Main, NextScript } from 'next/document'

import Seo from '../components/seo';
import Menu from '../components/menu';
import Load from '../components/load';
import Capa from '../components/capa';
import About from '../components/about';
import Service from '../components/service';
import Portfolio from '../components/portfolio';
import Experiencie from '../components/experience';
import Contact from '../components/contact';
import Footer from '../components/footer';

function index(props) {
    return (
        <>
            <Seo title="Alex Ricardo" description="descrição" />


            <body className="dark">
                <Load />

                <div className="arlo_tm_all_wrap">
                    <div className="wrapper_inner">
                        <Menu />

                        <div className="arlo_tm_rightpart">
                            <div className="rightpart_inner">
                                <Capa />
                                <About />
                                <Service />
                                <Portfolio />
                                <Experiencie />
                                <Contact />
                                <Footer />
                            </div>
                        </div>

                    </div>
                </div>


                
                <script type="text/javascript" src="../static/js/jquery.js"></script>
                <script type="text/javascript" src="../static/js/plugins.js"></script>
                <script type="text/javascript" src="../static/js/init.js"></script>
            </body>


        </>
    );
}

export default index;
