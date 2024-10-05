export interface IArtist {
  id: string;
  name: string;
  music: EMusic;
}

export enum EMusic {
  ROCK = 'Rock',
  POP = 'Pop',
  JAZZ = 'Jazz',
  CLASSICAL = 'Classical',
  HIP_HOP = 'Hip Hop',
  ELECTRONIC = 'Electronic',
  REGGAE = 'Reggae',
  BLUES = 'Blues',
  COUNTRY = 'Country',
  METAL = 'Metal',
}
