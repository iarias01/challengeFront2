import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFestivalComponent } from './form-festival.component';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { ReactiveFormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { FormFestivalRoutingModule } from './form-festival-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [FormFestivalComponent],
  imports: [
    CommonModule,
    FormFestivalRoutingModule,
    CalendarModule,
    MultiSelectModule,
    ReactiveFormsModule,
    PanelModule,
    InputTextModule,
    InputTextareaModule,
  ],
})
export class FormFestivalModule {}
