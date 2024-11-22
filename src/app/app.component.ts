import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MortageFormComponent } from './mortage-form/mortage-form.component';
import { MortagePaymentResultComponent } from './mortage-payment-result/mortage-payment-result.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MortageFormComponent, MortagePaymentResultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mortage-repayment-calculator';
}
