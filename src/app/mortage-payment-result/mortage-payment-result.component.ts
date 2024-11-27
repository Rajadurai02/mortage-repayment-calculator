import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
@Component({
  selector: 'app-mortage-payment-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mortage-payment-result.component.html',
  styleUrl: './mortage-payment-result.component.css'
})
export class MortagePaymentResultComponent {
  isPaymentResultCalculated: boolean = false;
  mortgageAmount = { monthlyPayment: '', termPayment: ''};
  constructor(private readonly _dataService: DataService){
  }

  ngOnInit(){
    this._dataService.currentData.subscribe((data) => {
      console.log(data);
      this.mortgageAmount = data;
      if(this.mortgageAmount.monthlyPayment !== ''){
        this.isPaymentResultCalculated = true;
      }
    });
  }
}
