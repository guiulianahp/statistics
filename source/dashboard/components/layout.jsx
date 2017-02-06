import React from 'react';

function Layout(props) {
    return(
        <html>
        <head>
            <meta charSet="utf-8" />
            <title>{props.title}</title>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
            />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"
            />
            <link
                rel="stylesheet"
                href="http://localhost:3001/styles.css"
            />

        </head>
        <body>
        <div
            id="render-target"
            dangerouslySetInnetHTML={{
                __html: props.content,
            }}
        />
        <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <script src="http://localhost:3001/app.js"></script>
        </body>
        </html>
    )
}

export default Layout;
