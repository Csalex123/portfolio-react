import React from 'react';

function footer(props) {
    const currentYear = new Date().getFullYear();

    return (
        <div className="arlo_tm_footer">
            <div className="container">
                <div className="footer_inner">
                    <div className="copy">
                        <p>Copyright © {currentYear} -  Alex Ricardo</p>
                    </div>
                    <div className="top">
                        <a className="arlo_tm_totop" href="#" />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default footer;