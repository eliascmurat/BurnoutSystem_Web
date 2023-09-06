import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThanksRoutingModule } from './thanks-routing.module';
import { ThanksComponent } from './thanks.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    ThanksComponent
  ],
  imports: [
    CommonModule,
    ThanksRoutingModule,
    FontAwesomeModule
  ]
})
export class ThanksModule { }
