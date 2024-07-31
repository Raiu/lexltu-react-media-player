import { ReactElement } from 'react';
import { Controls } from '../Controls';
import { Seekbar } from '../Seekbar';
import { CurrentPlaying } from '../CurrentPlaying';

import { tracks } from '../../data';

import './index.css';
import { CoverImg } from '../CoverImg';


export function Player(): ReactElement {
    const currentTrack = tracks[0];
    return (
        <section id="player">
            <CoverImg src={currentTrack.imgUrl} alt={currentTrack.title} />
            <CurrentPlaying track={currentTrack} />
            <Seekbar duration={currentTrack.duration} />
            <Controls />
        </section>            
    )
}