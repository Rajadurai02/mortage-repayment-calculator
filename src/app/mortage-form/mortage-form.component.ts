import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
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
  MortgageForm! : FormGroup;
  constructor(private readonly _fb: FormBuilder){
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
    console.log(this.MortgageForm.value);
    this.formSubmitted = true;
    if(this.MortgageForm.valid){
      console.log(this.MortgageForm.value);
    }
    else{
      this.MortgageForm.markAllAsTouched();
    }
  }
}
