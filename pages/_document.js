import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head >
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="theme-color" content="#000000" />
                    <meta name="description" content="" />

                    <meta itemProp="name" content="Alex Ricardo" />
                    <meta itemProp="description" content="Descrição" />
                    <meta itemProp="image" content="" />

                    <meta property="og:url" content="" />
                    <meta property="og:site_name" content="Alex Ricardo Desenvolvedor" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Alex Ricardo" />
                    <meta property="og:description" content="Descrição" />
                    <meta property="og:image" content="" />
                    <meta property="og:image:width" content="1080" />
                    <meta property="og:image:height" content="606" />
                    <meta property="og:type" content="article" />

                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:description" content="descrição" />
                    <meta name="twitter:title" content="Alex Ricardo" />
                    <meta name="twitter:image" content="" />


                    <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:200i,300,300i,400,400i,500,500i,600,700,700i,800&display=swap" rel="stylesheet" />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous"></link>

                    <link type="text/css" rel="stylesheet" href="../static/css/style.css" />
                    <link type="text/css" rel="stylesheet" href="../static/css/plugins.css" />

                    
                    
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
                    <script type="text/javascript" src="../static/js/plugins.js"></script>
                    <script type="text/javascript" src="../static/js/init.js"></script>
                </body>
            </Html>
        )
    }
}

export default MyDocument