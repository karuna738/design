import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
sideMenu :number = 1;
checked : boolean = false;
plan : any[] = [
  {id:'0',service:"Online servie",content:"Access to multiplayer games",plan:"+$1/mo", checked:false},
  {id:'1',service:"Larger storage",content:"Extra 1TB of cloud save",plan:"+$2/mo", checked:false},
  {id:'2',service:"Customizable profile",content:"Custom theme on your profile",plan:"+$3/mo", checked:false}
]
constructor() { }
  ngOnInit() {
  }

  next(num:number){
    this.sideMenu = num;
  }
  back(num:number){
    this.sideMenu = num;
  }
}
