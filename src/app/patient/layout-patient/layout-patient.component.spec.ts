import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPatientComponent } from './layout-patient.component';

describe('LayoutPatientComponent', () => {
  let component: LayoutPatientComponent;
  let fixture: ComponentFixture<LayoutPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutPatientComponent]
    });
    fixture = TestBed.createComponent(LayoutPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
