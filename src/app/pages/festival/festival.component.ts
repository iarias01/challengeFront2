import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { AlertService } from 'src/app/services/alert/alert.service';
import { ArtistsService } from 'src/app/services/artists/artists.service';
import { FestivalsService } from 'src/app/services/festivals/festivals.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { EAlertType } from 'src/app/shared/utils/alert-type.enum';
import { IArtist } from 'src/app/shared/utils/artist.interface';
import { IFestivals } from 'src/app/shared/utils/festivals.interface';

@Component({
  selector: 'app-festival',
  templateUrl: './festival.component.html',
  styleUrls: ['./festival.component.scss'],
})
export class FestivalComponent implements OnInit {
  public festival: IFestivals | undefined = undefined;
  public artists: IArtist[] = [];
  private id = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private festivalsService: FestivalsService,
    private artistsService: ArtistsService,
    private loadingService: LoadingService,
    private alertService: AlertService,
  ) {}

  ngOnInit(): void {
    this.getFestival();
  }

  getFestival() {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.festivalsService
      .getFestivalById(this.id)
      .pipe(take(1))
      .subscribe({
        next: (data: IFestivals | undefined) => {
          this.festival = data;
          this.artists = this.artistsService.artist$.value.filter((artist) =>
            data?.artists.includes(artist.id),
          );
        },
        error: (error) => {
          this.loadingService.loading$.next(false);
          this.alertService.message$.next({
            description: 'Ocurrió un error al cargar el festival',
            type: EAlertType.ERROR,
          });
          console.error('Error', error);
        },
        complete: () => {
          this.loadingService.loading$.next(false);
        },
      });
  }
  edit() {
    this.router.navigateByUrl('/festival/form/' + this.id);
  }
}
