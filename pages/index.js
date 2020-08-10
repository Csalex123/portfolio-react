import React from 'react';
import Head from 'next/head';

import Menu from '../components/menu';
import Load from '../components/load';
import Capa from '../components/capa';
import About from '../components/about';
import Tecnology from '../components/tecnologia';
import Portfolio from '../components/portfolio';
import Experiencie from '../components/experience';
import Contact from '../components/contact';
import Footer from '../components/footer';

function index(props) {
    return (
        <>
            <Head>
                <title>Alex Ricardo</title>
            </Head>

            <body className="dark">
                <Load />

                <div className="arlo_tm_all_wrap">
                    <div className="wrapper_inner">
                        <Menu />

                        <div className="arlo_tm_rightpart">
                            <div className="rightpart_inner">
                                <Capa />
                                <About />
                                <Tecnology />
                                <Portfolio />
                                <Experiencie />
                                <Contact />
                                <Footer />
                            </div>
                        </div>

                    </div>
                </div>
            </body>


        </>
    );
}

export default index;
