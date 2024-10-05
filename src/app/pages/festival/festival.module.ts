import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FestivalComponent } from './festival.component';
import { FestivalRoutingModule } from './festival-routing.module';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [FestivalComponent],
  imports: [CommonModule, FestivalRoutingModule, CardModule],
})
export class FestivalModule {}
