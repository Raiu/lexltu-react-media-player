import { ReactElement } from 'react';
import { Player } from './components/Player';
import { Playlist } from './components/Playlist';

export function App(): ReactElement {
  return (
    <>
      <header className='flex center-items justify-center '>
        <div>
          <h4>Playlist - Moody</h4>
        </div>
      </header>
      <main className='flex center-items justify-center grid-cols-2 gap-4'>
        <Playlist />
        <Player />
      </main>
    </>
  );
}
