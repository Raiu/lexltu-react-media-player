import { ReactElement } from 'react';
import { Controls } from '../Controls';
import { Seekbar } from '../Seekbar';
import { CurrentPlaying } from '../CurrentPlaying';

import './index.css';

export function Player(): ReactElement {
    return (
        <section id="player">
            <CurrentPlaying />
            <Seekbar />
            <Controls />
        </section>            
    )
}