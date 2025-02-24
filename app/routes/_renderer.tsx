import { Style, css, keyframes } from 'hono/css'
import { jsxRenderer } from 'hono/jsx-renderer'
import { Script } from 'honox/server'

import Link from '../components/Link'

const linkList = css`
    display: flex;
    gap: 16px;
    font-size: 1.1rem;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    align-items: center;
    padding-top: 0;

    a {
        color: #ffffff;
        position: relative;
        transition: color 0.1s ease, transform 0.1s ease;
        display: inline-block;

        &:hover {
            color: #0070f3;
            transform: scale(1.1);
        }
    }

    span.separator {
        color: rgba(255, 255, 255, 0.6);
        font-weight: 400;
        margin: 0 8px;
    }

    @media (max-width: 600px) {
        flex-direction: column;
        gap: 8px;

        span.separator {
            display: none;
        }
    }
`;

const headerContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 32px;
    background-color: #000000;
    color: #ffffff;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    flex-wrap: wrap;

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

const headerTitle = css`
    margin-bottom: 0;
`

const snowHoverAnim = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

const snowHover = css`
    display: inline-block;
    transition: transform 0.5s ease-in-out;
    margin-right: 10px;
    transform-origin: center;
    
    &:hover,
    &:active,
    &:focus {
        animation: ${snowHoverAnim} 0.5s ease-in-out;
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
                <style>{"body{background-color: #000000;}"}</style>
                <link rel="icon" href="/favicon.ico" />
                {/* preconnect */}
                <link rel="preconnect" href="https://cdn.f1w3.me/" />
                <link rel="preconnect" href="https://cdn.jsdelivr.net/" />
                <link rel="preconnect" href="https://fonts.xz.style/" />
                {/* tabler icons */}
                <link rel="preload" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons-outline.min.css" as="style" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons-outline.min.css" media="print" onload="this.media='all'" />
                {/* xz fonts */}
                <link rel="preload" href="https://cdn.f1w3.me/fonts/inter.css" as="style" />
                <link rel="stylesheet" href="https://cdn.f1w3.me/fonts/inter.css" media="print" onload="this.media='all'" />
                {/* xz new.css */}
                <link rel="preload" href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css" as="style" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css" media="print" onload="this.media='all'" />
                {redirectTime && <meta http-equiv="refresh" content={`${redirectTime.time}; url=${redirectTime.url}`} />}
                <Script src="/app/client.ts" async />
                <Style />
            </head>
            <body>
                <header class={headerContainer}>
                    <h1 class={headerTitle}>
                        <span class={snowHover}>❆</span>f1w3.me
                    </h1>
                    <h5 class={linkList}>
                        <Link title="home" href="/" />
                        <span class="separator">|</span>
                        <Link title="github" href="https://github.com/f1w3/" external />
                    </h5>
                </header>
                {children}
            </body>
        </html >
    )
})
