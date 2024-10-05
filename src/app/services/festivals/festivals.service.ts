import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap, take } from 'rxjs';
import { FESTIVALS_MOCK } from 'src/app/mocks/festivals.mock';
import { IFestivals } from 'src/app/shared/utils/festivals.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FestivalsService {
  private url = environment.urlApi;
  private path = '/api/festivals';
  constructor(private http: HttpClient) {}

  getFestivals(): Observable<IFestivals[]> {
    return of(FESTIVALS_MOCK);
    //return this.http.get<IFestivals[]>(`${this.url}${this.path}`);
  }
  getFestivalById(id: string): Observable<IFestivals | undefined> {
    const item = FESTIVALS_MOCK.find((e) => e.id == id);
    return of(item);
    //return this.http.get<IFestivals[]>(`${this.url}${this.path}`);
  }

  saveFestival(data: IFestivals): Observable<IFestivals> {
    return this.http.put<IFestivals>(`${this.url}${this.path}`, data);
  }

  addFestival(data: IFestivals): Observable<IFestivals> {
    return this.http.post<IFestivals>(`${this.url}${this.path}`, data);
  }
  deleteFestival(id: string) {
    const params = { id };
    return this.http.delete(`${this.url}${this.path}`, { params, responseType: 'text' });
  }
  removeAllFestivals(festivals: IFestivals[]): void {
    festivals.forEach((item) => {
      this.deleteFestival(item.id).pipe(take(1)).subscribe();
    });
  }
}
