import { ReactElement } from 'react';
import { Player } from './components/Player';
import { Playlist } from './components/Playlist';

export function App(): ReactElement {
  return (
    <>
      <div className='flex center-items justify-center' style={{ height: '100vh' }}>
        <div className='app-container'>
        <header className='flex center-items justify-between '>
          <div>
          <i className="lni lni-chevron-left"></i>
          </div>
          <div>
            <h4>Playlist - Moody</h4>
          </div>
          <div>
          <i className="lni lni-menu"></i>
          </div>
        </header>
        <main className='flex center-items justify-center grid-cols-2 gap-4'>
          <Playlist />
          <Player />
        </main>
        </div>
      </div>
    </>
  );
}
