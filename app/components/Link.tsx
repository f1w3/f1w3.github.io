import { css, cx } from "hono/css"
import { FC } from "hono/jsx"

const externalIcon = css`
    display: inline-block;
    text-decoration: none;
`

const Link: FC = ({ href, title, external }) => {
    return <a href={href} target={external ? "_blank" : "_self"} rel={external ? "noopener noreferrer" : ""}>
        {title}
        {external && <i class={cx(externalIcon, "ti", "ti-external-link")} />}
    </a>
}

export default Link;