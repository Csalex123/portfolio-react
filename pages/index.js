import React from 'react';
import Menu from '../components/menu';
import Link from 'next/link';

import { AnimatePresence, motion } from 'framer-motion';

import Gif from '../static/images/code.gif';
import '../static/styles/sass/index.scss';

function Index(props) {

    const pageTransition = {
        type: "tween",
        ease: 'anticipate',
        duration: .7
    }

    return (
        <>
            <Menu title="Alex Ricardo - Home" description="Alex Ricardo desenvolvedor web" active={true} />
            <div className="container-fluid home position-relative" style={{ backgroundImage: `url(${Gif})` }}>

                <div class="home__content">
                    <div className="home__title ">
                        <motion.h1
                            initial={{ opacity: 0, x: "-100vw", scale: 0.8 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: "100vw", scale: 1.2 }}
                            transition={pageTransition}
                        >Procurando um desenvolvedor web?</motion.h1>
                    </div>

                    <div className="home__about">
                        <motion.button
                            initial={{ opacity: 0, x: "100vw", scale: 0.8 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: "-100vw", scale: 1.2 }}
                            transition={pageTransition}
                            className="btn">
                            <span className="btn-text">
                                <Link href="/sobre">
                                    <a>Saiba Mais</a>
                                </Link>
                            </span>
                        </motion.button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Index;