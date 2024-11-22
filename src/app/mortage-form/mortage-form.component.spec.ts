import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortageFormComponent } from './mortage-form.component';

describe('MortageFormComponent', () => {
  let component: MortageFormComponent;
  let fixture: ComponentFixture<MortageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MortageFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MortageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
