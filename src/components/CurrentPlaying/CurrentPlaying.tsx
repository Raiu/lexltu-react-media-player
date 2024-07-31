import { ReactElement } from 'react';
import { ITrack } from '../../interfaces';

import './index.css';

interface IProp {
    track: ITrack
}

export function CurrentPlaying({ track }: IProp): ReactElement {

    return (
        <div className="current-playing flex justify-between items-center" style={{padding: "1rem"}}>
            <div>
                <button className='button icon-button'>
                    <i className="lni lni-circle-plus"></i>

                </button>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className="title">
                    <span>{track.title}</span>
                </div>
                <div className="artist">
                    <span>{track.artist}</span>
                </div>
            </div>
            <div>
                <button className='button icon-button'>
                    <i className="lni lni-heart"></i>
                </button>
            </div>
        </div>
    )
}