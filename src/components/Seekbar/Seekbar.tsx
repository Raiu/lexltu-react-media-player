import { ReactElement } from "react"

import "./index.css"

export function Seekbar(): ReactElement {
    return (
        <div id="seekbar-container">
            <div id="seekbar" style={{width: "80%"}}></div>
        </div>
    )
}