import { ReactElement } from "react";
import { ITrack } from "../../interfaces";

import "./index.css";

interface IProp {
    track: ITrack
}

export function TrackCard({ track }: IProp): ReactElement {
    return (
        <div key={track.id} className="track track-card flex justify-center items-center">
            <div className="track-cover flex flex-col justify-center items-center">
                <img src={track.imgUrl} alt={track.title} />
            </div>
            <div className="track-info mx-4 flex flex-col justify-center items-center">
                <div className="track-title">{track.title}</div>
                <div className="track-artist">{track.artist}</div>
            </div>
            <div className="track-controls last-item-right flex flex-col justify-center items-center">
                <button className="button icon-button btn control-btn">
                    <i className="lni lni-play"></i>
                </button>
            </div>
        </div>
    )
}
