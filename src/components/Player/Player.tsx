import { ReactElement } from 'react';
import { Controls } from '../Controls';
import { Seekbar } from '../Seekbar';
import { CurrentPlaying } from '../CurrentPlaying';

import { tracks } from '../../data';

import './index.css';


export function Player(): ReactElement {
    const currentTrack = tracks[0];
    return (
        <section id="player">
            <CurrentPlaying track={currentTrack} />
            <Seekbar />
            <Controls />
        </section>            
    )
}