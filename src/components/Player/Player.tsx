import { ReactElement } from 'react';
import { Controls } from '../Controls';
import { Seekbar } from '../Seekbar';


export function Player(): ReactElement {
    return (
        <section id="player">
            <Seekbar />
            <Controls />
        </section>            
    )
}