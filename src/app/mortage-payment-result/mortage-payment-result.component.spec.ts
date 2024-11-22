import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortagePaymentResultComponent } from './mortage-payment-result.component';

describe('MortagePaymentResultComponent', () => {
  let component: MortagePaymentResultComponent;
  let fixture: ComponentFixture<MortagePaymentResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MortagePaymentResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MortagePaymentResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
