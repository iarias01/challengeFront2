import { EMusic, IArtist } from '../shared/utils/artist.interface';

export const ARTISTS_MOCK: IArtist[] = [
  { id: 'artist1', name: 'John Doe', music: EMusic.ROCK },
  { id: 'artist2', name: 'Jane Smith', music: EMusic.POP },
  { id: 'artist3', name: 'Alice Johnson', music: EMusic.JAZZ },
  { id: 'artist4', name: 'Bob Brown', music: EMusic.CLASSICAL },
  { id: 'artist5', name: 'Charlie Black', music: EMusic.HIP_HOP },
];
