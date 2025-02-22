import type { NotFoundHandler } from 'hono'

const handler: NotFoundHandler = (c) => {
    c.status(404)
    return c.render(
        <>
            <h1>404 Not Found</h1>
            <p>Redirecting to <a href="/">home</a></p>
        </>,
        {
            title: '404 Not Found',
            redirectTime: {
                time: 3,
                url: '/',
            },
        }
    )
}

export default handler
