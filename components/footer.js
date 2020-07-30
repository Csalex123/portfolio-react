import React from 'react';
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

import '../static/styles/sass/footer.scss';

function footer({ active }) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer shadow">
            <div className="footer__slide">
                <div>
                    <a href="https://www.facebook.com/alex.ricardo.52643" target="_blank">
                        <FaFacebookF  size="22px" />
                    </a>
                </div>
                <div>
                    <a href="https://www.instagram.com/alex._ricardo/" target="_blank">
                        <FaInstagram size="22px" />
                    </a>
                </div>
                <div>
                    <a href="https://github.com/Csalex123" target="_blank">
                        <FaGithub size="22px" />
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/alex-ricardo-233054154/" target="_blank">
                        <FaLinkedin size="22px" />
                    </a>
                </div>
            </div>
            <p>Copyright © {currentYear} -  Alex Ricardo</p>
        </footer>
    );
}

export default footer;