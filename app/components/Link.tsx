import { css, cx } from "hono/css"

const externalIcon = css`
    display: inline-block;
    text-decoration: none;
`

export default (props: { href: string, title: string, external?: boolean }) => {
    return <a href={props.href} target={props.external ? "_blank" : "_self"} rel={props.external ? "noopener noreferrer" : ""}>
        {props.title}
        {props.external && <i class={cx(externalIcon, "ti", "ti-external-link")} />}
    </a>
}