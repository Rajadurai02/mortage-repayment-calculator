import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-mortage-payment-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mortage-payment-result.component.html',
  styleUrl: './mortage-payment-result.component.css'
})
export class MortagePaymentResultComponent {
  isPaymentResultCalculated: boolean = false;
}
