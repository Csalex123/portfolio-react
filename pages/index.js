import React from 'react';
import Menu from '../components/menu';
import Link from 'next/link';

import '../static/styles/sass/index.scss';
import Gif from '../static/images/code.gif';

import '../static/styles/sass/index.scss';

function Index(props) {
    return (
        <>
            <Menu title="Alex Ricardo - Home" description="Alex Ricardo desenvolvedor web"  active={true} />

            <div className="container-fluid home position-relative" style={{ backgroundImage: `url(${Gif})` }}>

                <div class="home__content">
                    <div className="home__title ">
                        <h1>Procurando um desenvolvedor web?</h1>
                    </div>

                    <div className="home__about">
                        <button className="btn">
                            <span className="btn-text">
                                <Link href="/sobre">
                                    <a>Saiba Mais</a>
                                </Link>
                            </span>
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Index;