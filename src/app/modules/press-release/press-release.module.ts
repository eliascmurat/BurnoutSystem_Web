import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PressReleaseRoutingModule } from './press-release-routing.module';
import { PressReleaseComponent } from './press-release.component';
import {HeaderModule} from "../../components/header/header.module";


@NgModule({
  declarations: [
    PressReleaseComponent
  ],
    imports: [
        CommonModule,
        PressReleaseRoutingModule,
        HeaderModule
    ]
})
export class PressReleaseModule { }
