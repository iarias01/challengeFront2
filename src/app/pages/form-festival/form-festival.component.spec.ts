import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFestivalComponent } from './form-festival.component';

describe('FormFestivalComponent', () => {
  let component: FormFestivalComponent;
  let fixture: ComponentFixture<FormFestivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFestivalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFestivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
