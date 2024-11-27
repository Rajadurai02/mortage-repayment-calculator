import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
@Component({
  selector: 'app-mortage-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './mortage-form.component.html',
  styleUrl: './mortage-form.component.css'
})
export class MortageFormComponent {
  formFieldStates : { [key:string] : boolean} = {};
  formSubmitted: boolean = false;
  monthlyAmount: number = 0;
  termAmount: number = 0;
  MortgageForm! : FormGroup;
  constructor(private readonly _fb: FormBuilder, private readonly _dataService: DataService){
    this.initMortgageForm();
  }

  setFieldState(fieldName:string, state:boolean) {
    this.formFieldStates[fieldName] = state;
  }  

  initMortgageForm(){
    this.MortgageForm = this._fb.group({
      mortgageAmount: ['',Validators.required],
      mortgageTerm: ['',Validators.required],
      interestRate: ['',Validators.required],
      mortgageType: ['', Validators.required]
    });
  }

  get MortgageAmount(){
    return this.MortgageForm.get('mortgageAmount');
  }

  get MortgageTerm(){
    return this.MortgageForm.get('mortgageTerm');
  }
  get InterestRate(){
    return this.MortgageForm.get('interestRate');
  }
  get MortgageType(){
    return this.MortgageForm.get('mortgageType');
  }

  onMortgageFormSubmit(){
    this.formSubmitted = true;
    if(this.MortgageForm.valid){
      let data = this.MortgageForm.value;
      if(data.mortgageType === 'repayment'){
        this.calculateMonthlyPaymentForRepayment(data.mortgageAmount, data.mortgageTerm, data.interestRate);
      }
      else{
        this.calculateMonthlyPaymentForInterestOnly(data.mortgageAmount, data.mortgageTerm, data.interestRate);
      }
    }
    else{
      this.MortgageForm.markAllAsTouched();
    }
  }

  calculateMonthlyPaymentForRepayment(amount:number, term:number, interest:number){
    let monthlyInterestRate = interest / 12 / 100;
    let totalPayments = term * 12;
    let compoundingEffect = ( 1 + monthlyInterestRate) ** totalPayments; 
    this.monthlyAmount = amount * ((monthlyInterestRate * compoundingEffect) / (compoundingEffect - 1));
    this.termAmount = this.monthlyAmount  * totalPayments;
    this._dataService.sendData({monthlyPayment: this.formatNumber(this.monthlyAmount), termPayment: this.formatNumber(this.termAmount)});
  }

  calculateMonthlyPaymentForInterestOnly(amount:number, term:number, interest:number){
    let monthlyInterestRate = interest / 12 / 100;
    let totalPayments = term * 12; 
    this.monthlyAmount = amount * monthlyInterestRate;
    this.termAmount  = this.monthlyAmount * totalPayments;
    this._dataService.sendData({monthlyPayment: this.formatNumber(this.monthlyAmount), termPayment: this.formatNumber(this.termAmount)});
  } 
  
  formatNumber(value: number): string {
    return value.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  clearFormFieldValue(){
    this.formSubmitted = false;
    this.MortgageForm.reset();
    this._dataService.sendData({monthlyPayment: '', termPayment: ''});
  }
}
