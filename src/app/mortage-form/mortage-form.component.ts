import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-mortage-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mortage-form.component.html',
  styleUrl: './mortage-form.component.css'
})
export class MortageFormComponent {

  formFieldStates : { [key:string] : boolean} = {};

  setFieldState(fieldName:string, state:boolean) {
    this.formFieldStates[fieldName] = state;
  }
}
