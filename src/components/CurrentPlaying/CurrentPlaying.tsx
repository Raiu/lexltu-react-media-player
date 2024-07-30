import { ReactElement } from 'react';

export function CurrentPlaying(): ReactElement {

    return (
        <div className="current-playing">
            <div className="title">
                <span>Like we used to</span>
            </div>
            <div className="artist">
                <span>A Rocket to the moon</span>
            </div>
        </div>
    )
}