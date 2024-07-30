import { ReactElement } from "react";
import { ITrack } from "../../interfaces";

interface IProp {
    track: ITrack
}

export function TrackCard({ track }: IProp): ReactElement {
    return (
        <div key={track.id} className="track track-card flex">
            <div className="track-cover">
                <img src={track.imgUrl} alt={track.title} />
            </div>
            <div className="track-info">
                <h3>{track.title}</h3>
                <p>{track.artist}</p>
            </div>
            <div className="track-controls">
                <button className="btn btn-primary">
                    <i className="fa fa-play"></i>
                </button>
            </div>
        </div>
    )
}
