import { ReactElement } from 'react';

// Data
import { tracks } from '../../data';

// Components
import { TrackCard } from '../TrackCard';

export function Playlist(): ReactElement { 
    return (
        <section id="playlist">
            {tracks.map((track) => (
                <TrackCard track={track} />
            ))}
        </section>
    )
}