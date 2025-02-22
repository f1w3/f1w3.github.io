import { css, cx } from "hono/css"

const copyCss = css`
    .copy-text {
        background: #1e1e1e;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        user-select: none;
    }
    .copy-text:hover {
        background: #333;
    }
`

export default (props: { children: string; }) => {
    return <span class={copyCss}>
        {props.children}
    </span>
}