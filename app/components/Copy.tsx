import { css } from "hono/css"
import { FC } from "hono/jsx";

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

const Copy: FC = ({ children }) => {
    return <span class={copyCss}>
        {children}
    </span>
}

export default Copy;