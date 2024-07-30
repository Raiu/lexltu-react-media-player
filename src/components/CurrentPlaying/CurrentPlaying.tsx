import { ReactElement } from 'react';
import { ITrack } from '../../interfaces';

import './index.css';

interface IProp {
    track: ITrack
}

export function CurrentPlaying({ track }: IProp): ReactElement {

    return (
        <div className="current-playing flex flex-col justify-center items-center">
            <div className="title">
                <span>{track.title}</span>
            </div>
            <div className="artist">
                <span>{track.artist}</span>
            </div>
        </div>
    )
}