import { Style, css } from 'hono/css'
import { jsxRenderer } from 'hono/jsx-renderer'
import { Script } from 'honox/server'

import Link from '../components/Link'

const snowHover = css`
    display: inline-block;
    transition: transform 0.5s ease-in-out;
    margin-right: 10px;
    &:hover {
        transform: rotate(360deg);
    }
`

const linkList = css`
    display: flex;
    gap: 8px;
    a {
        color: #007bff;
        transition: color 0.3s ease-in-out;
    }
    a:not(:last-child)::after {
        text-decoration: none;
        display: inline-block;
        content: "/";
        margin-left: 8px;
        color: #ffffff;
    }
`;


export default jsxRenderer(({ children, title, redirectTime }) => {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@f1w3_" />
                <meta name="twitter:creator" content="@f1w3_" />
                <meta property="og:url" content="https://f1w3.me/" />
                <meta property="og:title" content="Self introduction for me" />
                <meta property="og:description" content="Hello! I'm a software and backend developer." />
                <meta property="og:site_name" content="f1w3 self introduction page" />
                <meta property="og:image" content="/tanakachan.png" />
                <title>{title}</title>
                <style>{`
                    body {
                        background-color: #000000;
                    }
                `}</style>
                <link rel="icon" href="/favicon.ico" />
                {/* preconnect */}
                <link rel="preconnect" href="https://cdn.jsdelivr.net" />
                <link rel="preconnect" href="https://fonts.xz.style" />
                {/* tabler icons */}
                <link rel="preload" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons-outline.min.css" as="style" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons-outline.min.css" media="print" onload="this.media='all'" />
                {/* xz fonts */}
                <link rel="preload" href="https://fonts.xz.style/serve/inter.css" as="style" />
                <link rel="stylesheet" href="https://fonts.xz.style/serve/inter.css" media="print" onload="this.media='all'" />
                {/* xz new.css */}
                <link rel="preload" href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css" as="style" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css" media="print" onload="this.media='all'" />
                {redirectTime && <meta http-equiv="refresh" content={`${redirectTime.time}; url=${redirectTime.url}`} />}
                <Script src="/app/client.ts" async />
                <Style />
            </head>
            <body>
                <header>
                    <h1><span class={snowHover}>❆</span>f1w3.me</h1>
                    <h5 class={linkList}>
                        <Link title="home" href="/" />
                        <Link title="github" href="https://github.com/f1w3/" external />
                    </h5>
                </header>
                {children}
            </body>
        </html>
    )
})
