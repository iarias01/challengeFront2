import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FestivalComponent } from './festival.component';
import { FestivalRoutingModule } from './festival-routing.module';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [FestivalComponent],
  imports: [CommonModule, FestivalRoutingModule, CardModule, ButtonModule],
})
export class FestivalModule {}
