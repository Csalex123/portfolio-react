import React from 'react';
import Head from 'next/head';

function Seo(props) {
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="" />

                <meta itemprop="name" content={props.title} />
                <meta itemprop="description" content={props.description} />
                <meta itemprop="image" content="" />

                <meta property="og:url" content="" />
                <meta property="og:site_name" content="Alex Ricardo Desenvolvedor" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={props.title} />
                <meta property="og:description" content={props.description} />
                <meta property="og:image" content="" />
                <meta property="og:image:width" content="1080" />
                <meta property="og:image:height" content="606" />
                <meta property="og:type" content="article" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:description" content={props.description} />
                <meta name="twitter:title" content={props.title} />
                <meta name="twitter:image" content="" />

                <title>{props.title}</title>

                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"></link>

                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
            </Head>
        </div>
    );
}

export default Seo;