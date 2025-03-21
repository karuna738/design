import { CommonModule } from '@angular/common';
import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { addOnsMonth, addOnsYear, menuData, planMonth, planYear } from './register-model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule],
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

constructor(public fb : FormBuilder) { 
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
        email: ['', Validators.required],
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
    if (this.regForm.get(tab)?.valid || (tab === 'addOns' && this.selectedAddOns.length > 0)) {
      this.sideMenu = num;
    }else if(num == 5){
      this.sideMenu = num;
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
