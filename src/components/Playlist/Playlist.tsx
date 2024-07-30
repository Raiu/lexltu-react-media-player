import { ReactElement } from 'react';

const trackData = [
    { 
        id: 1,
        artist: 'A Rocket to the moon',
        title: 'Like we used to',
        duration: 180000,
        imgUrl: ""
    },
    {
        id: 2,
        artist: "John Legend",
        title: "Save the room",
        duration: 180000,
        imgUrl: ""
    },
    {
        id: 3,
        artist: "The Rolling Stones",
        title: "Sympathy for the devil",
        duration: 180000,
        imgUrl: ""
    },
    {
        id: 4,
        artist: "The Beatles",
        title: "Hey Jude",
        duration: 180000,
        imgUrl: ""
    },
    {
        id: 5,
        artist: "Imagine Dragons",
        title: "Believer",
        duration: 180000,
        imgUrl: ""
    }
]

export function Playlist(): ReactElement {
    return (
        <section id="playlist">
            {trackData.map((track) => (
                <div key={track.id} className="track">
                    <img src={track.imgUrl} alt={track.title} />
                    <div className="track-info">
                        <h3>{track.title}</h3>
                        <p>{track.artist}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}