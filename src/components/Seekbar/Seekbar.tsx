import { ReactElement } from "react"

import "./index.css"

interface IProp {
    duration: number
}

function msToTime(duration: number): string {
    const minutes = Math.floor(duration / 60000);
    const seconds = (duration % 60000) / 1000;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

export function Seekbar({ duration }: IProp): ReactElement {
    const currentTime = msToTime(144000);
    const maxDuration = msToTime(duration);
    return (
        <div id="progress" className="flex gap-4">
            <div id="current-progress">
                <span>{currentTime}</span>
            </div>
            <div id="seekbar-container" style={{ flexGrow: 1 }}>
                <div id="seekbar" style={{ width: "80%" }}></div>
            </div>
            <div id="max-duration">
                <span>{maxDuration}</span>
            </div>
        </div>

    )
}