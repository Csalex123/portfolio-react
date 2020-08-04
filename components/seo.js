import React from 'react';
import Head from 'next/head';

function Seo({ title, description }) {
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="" />

                <meta itemProp="name" content={title} />
                <meta itemProp="description" content={description} />
                <meta itemProp="image" content="" />

                <meta property="og:url" content="" />
                <meta property="og:site_name" content="Alex Ricardo Desenvolvedor" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content="" />
                <meta property="og:image:width" content="1080" />
                <meta property="og:image:height" content="606" />
                <meta property="og:type" content="article" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:image" content="" />

                <title>{title}</title>

                <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Montserrat:200i,300,300i,400,400i,500,500i,600,700,700i,800&display=swap" rel="stylesheet" />

                <link type="text/css" rel="stylesheet" href="../static/css/plugins.css" />
                <link type="text/css" rel="stylesheet" href="../static/css/style.css" />   

            
            </Head>
        </div>
    );
}

export default Seo;