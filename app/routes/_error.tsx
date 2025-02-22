import type { ErrorHandler } from 'hono'

const handler: ErrorHandler = (e, c) => {
    if ('getResponse' in e) {
        return e.getResponse()
    }
    c.status(500)
    return c.render(
        <h1>Internal Server Error</h1>,
        {
            title: 'Internal Server Error'
        }
    )
}

export default handler
