import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step3PersonalComponent } from './step3-personal.component';

describe('Step3PersonalComponent', () => {
  let component: Step3PersonalComponent;
  let fixture: ComponentFixture<Step3PersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Step3PersonalComponent]
    });
    fixture = TestBed.createComponent(Step3PersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
