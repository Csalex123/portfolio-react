import React from 'react';

import Seo from './seo';
import Link from 'next/link'
import Logo from '../src/images/logo.png';

import '../src/styles/sass/menu.scss';

function menu(props) {
    return (
        <>
            <Seo title={props.title} description={props.description} />

            <nav className="navbar navbar-expand-lg  navbar-dark fixed-top" style={{ backgroundColor: "rgba(0,0,0,.8)"}}>
            <div className="container-fluid mr-md-0 ml-md-0 mr-xl-5 ml-xl-5 mr-sm-0 ml-sm-0">
                <div className="navbar-brand"  style={{ cursor: "pointer" }}>
                    {/* <h4>Alex Ricardo</h4> */}
                    <img className="img-fluid"  src={Logo} alt="Alex Ricardo " />
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ml-lg-4 ml-md-0 home ">
                            <Link href="/home">
                                <a className="nav-link ">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item ml-lg-4 ml-md-0 spaces-menu">
                            <Link href="/sobre">
                                <a className="nav-link" >Sobre</a>
                            </Link>
                        </li>
                        <li className="nav-item ml-lg-4 ml-md-0 events-menu">
                            <Link href="/porfolio">
                                <a className="nav-link">Portfolio</a>
                            </Link>
                        </li>
                        <li className="nav-item ml-lg-4 ml-md-0 ">
                            <Link href="/contato">
                                <a className="nav-link href=">Contato</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


        </>
    );
}

export default menu;