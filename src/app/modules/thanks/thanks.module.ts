import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThanksRoutingModule } from './thanks-routing.module';
import { ThanksComponent } from './thanks.component';
import {HeaderModule} from "../../components/header/header.module";


@NgModule({
  declarations: [
    ThanksComponent
  ],
    imports: [
        CommonModule,
        ThanksRoutingModule,
        HeaderModule
    ]
})
export class ThanksModule { }
