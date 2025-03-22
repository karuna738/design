import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { sheredModule } from '../../../common/sheredModule';

@Component({
  selector: 'app-form-1',
  standalone: true,
  imports: [...sheredModule],
  templateUrl: './form-1.component.html',
  styleUrl: './form-1.component.scss',
})
export class Form1Component implements OnInit {
  myform!: FormGroup;
  public submited:boolean = false;
  total: any = 0;
  monthlyPayment: any = 0;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.myform = this.fb.group({
      Amount: ['',Validators.required],
      Term  : ['',Validators.required],
      Rate  : ['',Validators.required],
      Type : [0]
    });
  }
  calculatePayment(amount: number, interestRate: number, numberOfPayments: number): number {
    const numerator = interestRate * amount * Math.pow(1 + interestRate, numberOfPayments);
    const denominator = Math.pow(1 + interestRate, numberOfPayments) - 1;
    return numerator / denominator;
  }
  onSubmit(){
    this.submited = true;
    if(this.myform.valid){
      const amount = this.myform.get('Amount')?.value;
      const term = this.myform.get('Term')?.value;
      const rate = this.myform.get('Rate')?.value;
      const type = this.myform.get('Type')?.value;
      let intrate = parseFloat(rate) / 100;
      let n = term * 12;
      this.monthlyPayment = this.calculatePayment(amount, intrate, n).toFixed(2);
      this.total =( this.monthlyPayment * n).toFixed(2);

    }
  }
  reSetData(){
    this.submited = false;
    this.monthlyPayment =  0;
    this.total = 0;
    this.myform.reset();
    this.myform.controls['Type'].setValue(0);
  }
}
