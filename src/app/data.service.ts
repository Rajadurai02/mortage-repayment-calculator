import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly mortgageResultSubject = new Subject<{ monthlyPayment : string, termPayment : string}>();
  currentData = this.mortgageResultSubject.asObservable();
  sendData(newData: { monthlyPayment: string; termPayment: string }) {
    this.mortgageResultSubject.next(newData);
  }
}
