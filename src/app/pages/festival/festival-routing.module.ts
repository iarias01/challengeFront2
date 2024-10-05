import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FestivalComponent } from './festival.component';

const routes: Routes = [
  {
    path: '',
    component: FestivalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FestivalRoutingModule {}
