import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert/alert.service';
import { FestivalsService } from 'src/app/services/festivals/festivals.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { EAlertType } from 'src/app/shared/utils/alert-type.enum';
import { IFestivals } from 'src/app/shared/utils/festivals.interface';
import { take } from 'rxjs';
import { IArtist } from 'src/app/shared/utils/artist.interface';
import { ArtistsService } from '../../services/artists/artists.service';

@Component({
  selector: 'app-form-festival',
  templateUrl: './form-festival.component.html',
  styleUrls: ['./form-festival.component.scss'],
})
export class FormFestivalComponent implements OnInit {
  public festivalForm: FormGroup;
  public artists: IArtist[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private festivalsService: FestivalsService,
    public artistsService: ArtistsService,
    private loadingService: LoadingService,
    private alertService: AlertService,
  ) {
    this.artistsService.artist$.subscribe((data) => {
      this.artists = data;
    });
    this.festivalForm = this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      time: [''],
      city: ['', Validators.required],
      description: [''],
      artists: [[], Validators.required],
    });
  }

  ngOnInit(): void {
    const festivalId = this.route.snapshot.paramMap.get('id');
    if (festivalId) {
      this.loadingService.loading$.next(true);
      this.festivalsService
        .getFestivalById(festivalId)
        .pipe(take(1))
        .subscribe({
          next: (festival: IFestivals | undefined) => {
            if (festival) {
              const dataArtist = festival.artists.map((a) => {
                return this.artistsService.getArtistById(a);
              });
              this.festivalForm.patchValue({ ...festival, artists: dataArtist });
            }
            this.loadingService.loading$.next(false);
          },
          error: () => {
            this.loadingService.loading$.next(false);
            this.alertService.message$.next({
              description: 'Ocurrió un error al cargar el festival',
              type: EAlertType.ERROR,
            });
          },
        });
    }
  }

  onSubmit(): void {
    console.log(this.festivalForm.value);
    if (this.festivalForm.valid) {
      this.loadingService.loading$.next(true);
      const festivalData: IFestivals = this.festivalForm.value;
      this.festivalsService
        .saveFestival(festivalData)
        .pipe(take(1))
        .subscribe({
          next: () => {
            this.loadingService.loading$.next(false);
            this.alertService.message$.next({
              description: 'Festival registrado!',
              type: EAlertType.SUCCESS,
            });
          },
          error: () => {
            this.loadingService.loading$.next(false);
            this.alertService.message$.next({
              description: 'Ocurrió un error al cargar el festival',
              type: EAlertType.ERROR,
            });
          },
        });
    }
  }

  get getArtist() {
    return this.festivalForm?.get('artists')?.value ?? [];
  }
}
