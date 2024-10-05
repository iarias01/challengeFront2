import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormFestivalComponent } from './form-festival.component';

const routes: Routes = [
  {
    path: '',
    component: FormFestivalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormFestivalRoutingModule {}
