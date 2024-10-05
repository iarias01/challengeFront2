import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ARTISTS_MOCK } from 'src/app/mocks/artists.mock';
import { IArtist } from 'src/app/shared/utils/artist.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArtistsService {
  private url = environment.urlApi;
  private path = '/api/artists';
  public artist$ = new BehaviorSubject<IArtist[] | []>([]);
  constructor(private http: HttpClient) {}

  getArtists(): Observable<IArtist[]> {
    return of(ARTISTS_MOCK);
    //return this.http.get<IArtist[]>(`${this.url}${this.path}`);
  }
  getArtistById(id: string): IArtist | undefined {
    console.log(id);
    return ARTISTS_MOCK.find((e) => e.id == id);
    //return this.http.get<IArtist[]>(`${this.url}${this.path}`);
  }
}
