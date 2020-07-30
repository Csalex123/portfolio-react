import React from 'react';

import '../static/styles/sass/footer.scss';

function footer({active}) {
    const currentYear= new Date().getFullYear(); 

    return (
        <footer className="footer shadow">
            <p>Copyright © {currentYear} -  Alex Ricardo</p>
        </footer>
    );
}

export default footer;