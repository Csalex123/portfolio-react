import React from 'react';

function gallery({ nameClass, category, title, img, }) {
    return (
        <>
            <li className={nameClass}>
                <div className="inner">
                    <div className="entry arlo_tm_portfolio_animation_wrap" data-title={title} data-category={category}>
                        <a className="zoom" href={img}>
                            <img src={img} alt={title} />
                            <div className="main_image" data-img-url={img} />
                        </a>
                    </div>
                </div>
            </li>
        </>
    );
}

export default gallery;