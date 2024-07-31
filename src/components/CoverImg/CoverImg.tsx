import { ReactElement } from "react";

import './index.css';


interface IProp {
    src: string
    alt: string
}

export function CoverImg({src, alt}: IProp): ReactElement {
    return (
        <div className="" style={{padding: "2rem"}}>
            <figure className="cover-img">
                <img src={src} alt={alt} />
            </figure>
        </div>
    )
}