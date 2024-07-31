import { ReactElement } from 'react';

// Data
import { tracks } from '../../data';

// Components
import { TrackCard } from '../TrackCard';

import './index.css';

export function Playlist(): ReactElement { 
    return (
        <section id="playlist" className='flex flex-col gap-4'>
            {tracks.map((track) => (

                    <TrackCard key={track.id} track={track} />
            ))}
        </section>
    )
}