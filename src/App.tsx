import { ReactElement } from 'react';
import { Player } from './components/Player';
import { Playlist } from './components/Playlist';

export function App(): ReactElement {
  return (
    <>
      <Player />
      <Playlist />
    </>
  );
}
