import { Component } from '@angular/core';
import { ArtistsService } from './services/artists/artists.service';
import { take } from 'rxjs';
import { IArtist } from './shared/utils/artist.interface';
import { AlertService } from './services/alert/alert.service';
import { EAlertType } from './shared/utils/alert-type.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private artistsService: ArtistsService,
    private alertService: AlertService,
  ) {
    this.loadArtist();
  }
  loadArtist() {
    this.artistsService
      .getArtists()
      .pipe(take(1))
      .subscribe({
        next: (data: IArtist[]) => {
          this.artistsService.artist$.next(data);
        },
        error: (error) => {
          this.alertService.message$.next({
            description: 'Ocurrió un error al cargar los artistas',
            type: EAlertType.ERROR,
          });
          console.error('Error', error);
        },
      });
  }
}
