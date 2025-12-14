import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2PersonalComponent } from './step2-personal.component';

describe('Step2PersonalComponent', () => {
  let component: Step2PersonalComponent;
  let fixture: ComponentFixture<Step2PersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Step2PersonalComponent]
    });
    fixture = TestBed.createComponent(Step2PersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
