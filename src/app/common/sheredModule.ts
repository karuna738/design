import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterLink, RouterModule, RouterOutlet } from "@angular/router";
import { OnlyNumbersDirective } from "./directives/only-numbers.directive";
import { LoaderComponent } from "./loader/loader.component";
import { TranslateModule } from "@ngx-translate/core";

export const sheredModule:any = [
    CommonModule,
    RouterLink, 
    FormsModule, 
    RouterOutlet,
    ReactiveFormsModule, 
    LoaderComponent, 
    OnlyNumbersDirective,
    RouterModule,
    TranslateModule
]
