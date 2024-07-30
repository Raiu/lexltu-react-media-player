import { ReactElement } from "react";
import { ITrack } from "../../interfaces";

interface IProp {
    track: ITrack
}

export function TrackCard( {track}:  IProp ): ReactElement {
    console.log(track);
  return (
    <div key={track.id} className="track track-card">
      <img src={track.imgUrl} alt={track.title} />
      <div className="track-info">
        <h3>{track.title}</h3>
        <p>{track.artist}</p>
      </div>
    </div>
  )
}
