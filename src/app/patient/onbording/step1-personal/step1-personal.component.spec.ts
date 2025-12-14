import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1PersonalComponent } from './step1-personal.component';

describe('Step1PersonalComponent', () => {
  let component: Step1PersonalComponent;
  let fixture: ComponentFixture<Step1PersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Step1PersonalComponent]
    });
    fixture = TestBed.createComponent(Step1PersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
