import { Component, OnInit } from '@angular/core';
import { FestivalsService } from 'src/app/services/festivals/festivals.service';
import { IFestivals } from 'src/app/shared/utils/festivals.interface';
import { AlertService } from '../../services/alert/alert.service';
import { EAlertType } from 'src/app/shared/utils/alert-type.enum';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public festivals: IFestivals[] = [];

  constructor(
    private festivalsService: FestivalsService,
    private alertService: AlertService,
    public router: Router,
    public loadingService: LoadingService,
  ) {}

  ngOnInit() {
    this.loadFestivals();
  }

  loadFestivals() {
    this.loadingService.loading$.next(true);
    setTimeout(() => {
      //el setTimeout se coloca solo con la finalidad de apreciar el loading
      this.festivalsService
        .getFestivals()
        .pipe(take(1))
        .subscribe({
          next: (data) => {
            this.festivals = this.sortData(data);
          },
          error: (error) => {
            this.loadingService.loading$.next(false);
            this.alertService.message$.next({
              description: 'Ocurrió un error al cargar los festivales',
              type: EAlertType.ERROR,
            });
            console.error('Error', error);
          },
          complete: () => {
            this.loadingService.loading$.next(false);
          },
        });
    }, 1000);
  }

  sortData(data: IFestivals[]): IFestivals[] {
    const currentDate = new Date();

    return data.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      return (
        Math.abs(dateA.getTime() - currentDate.getTime()) -
        Math.abs(dateB.getTime() - currentDate.getTime())
      );
    });
  }

  viewFestival(id: string) {
    this.router.navigateByUrl(`/festival/${id}`);
  }
}
