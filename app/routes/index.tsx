import { createRoute } from 'honox/factory'

import Link from '../components/Link'

export const GET = createRoute((c) => {
    const lang = c.get('language')
    console.log(lang)

    return c.render(
        <>
            <h2>About me</h2>
            <p>
                Hello! I'm a software and backend developer specializing in <code>TypeScript</code> development.
            </p>
            <p>
                Since childhood, I've always been curious about how things work and
                have loved exploring their inner mechanisms. And now, as a creator,
                I'm driven to explore even more.
            </p>
            <p>
                I'm passionate about exploring a wide range of technologies - from
                cutting-edge innovations to time-tested solutions.
            </p>
            <p>
                When I'm not coding, I enjoy listening to music and exploring new
                games. They inspire me and spark fresh ideas for my projects.
            </p>
            <h2>Current Projects</h2>
            <ul>
                <li>
                    <p>
                        I'm currently collaborating with a friend on <Link title="OMUAPPS" href="https://omuapps.com/" external />, using <code>Svelte</code>, <code>Tauri</code>, and <code>Python</code>.
                    </p>
                </li>
                <li>
                    <p>
                        I'm also refactoring and optimizing code, such as rewriting
                        javascript libraries in typescript and improving the
                        performance of legacy libraries.
                    </p>
                </li>
                <li>
                    <p>
                        I'm working on several other projects. For more details,
                        check out my github.
                    </p>
                </li>
            </ul>
            <h2>Links</h2>
            <dl>
                <dt>X(Twitter)</dt>
                <dd>
                    <Link title="https://x.com/f1w3_/" href="https://x.com/f1w3_/" external />
                </dd>
                <dt>Github</dt>
                <dd>
                    <Link title="https://github.com/f1w3/" href="https://github.com/f1w3/" external />
                </dd>
                <dt>Discord</dt>
                <dd>friend me <code>f1w3</code></dd>
            </dl>
        </>,
        { title: "❆ f1w3.me" }
    )
})
