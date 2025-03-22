import { CommonModule } from '@angular/common';
import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { addOnsMonth, addOnsYear, menuData, planMonth, planYear } from './register-model';

import { sheredModule } from '../../common/sheredModule';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [...sheredModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
regForm! : FormGroup;
sideMenu :number = 1;
menuData = menuData;
addOnsArray = addOnsMonth;
checked = signal(false);
selectedAddOns :any = [];
planArray:any[] = [];
filteredArray: any = {};
totalAmount: any;
loader :boolean = false;
submited :boolean = false;

constructor(public fb : FormBuilder, public route: Router) { 
  effect(() => {
    this.currentPlans();
    this.selectedAddOns = [];
  });
}

  ngOnInit() {
    this.formInit();
  }

  formInit(){
    this.regForm = this.fb.group({
      personalInfo: this.fb.group({
        name: ['', Validators.required],
        email: ['',[ Validators.required,Validators.email]],
        phone: ['', Validators.required]
      }),
      plan: this.fb.group({
        stage: [0, Validators.required],
        duration: [false, Validators.required],
      })
    })
  }

  SelectData(selectedData: any) {
    this.addOnsArray = this.addOnsArray.map(item => {
      if (item.id === selectedData.id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    this.selectedAddOns = this.addOnsArray.filter(res => res.checked === true);
  }

  next(num: number, tab: string) {
    this.finaly();
    this.submited = true;
    if (this.regForm.get(tab)?.valid || (tab === 'addOns' && this.selectedAddOns.length > 0)) {
      this.sideMenu = num;
      this.submited = false;
    }else if(num == 5){
      this.sideMenu = num;
      setTimeout(() => {
        this.loader = true;
        setTimeout(() => this.route.navigate(['/login']), 1000);
      }, 1000);
    }
  }
  
  back(num:number){
    this.sideMenu = num;
  }
  changePlan(){
    this.sideMenu = 2;
  }
  currentPlans = computed(() => this.checked() ?  planYear : planMonth);

  finaly(){
    if(this.selectedAddOns.length == 0){
      this.addOnsArray = this.checked() ?  addOnsYear : addOnsMonth;
    }
    this.planArray = this.regForm.controls['plan'].value['duration'] ? planYear : planMonth;
    this.filteredArray = this.planArray.find(res => res.id == this.regForm.controls['plan'].value['stage']);
    let mainPlan = this.filteredArray.plan;
    let subPlan = this.selectedAddOns.reduce((sum:any, res:any) => {
      const priceMatch = res.plan.match(/\d+/);
      return sum + (priceMatch ? parseInt(priceMatch[0], 10) : 0);
    }, 0);
    this.totalAmount = +mainPlan.match(/\d+/)[0] + subPlan;
  }

}
