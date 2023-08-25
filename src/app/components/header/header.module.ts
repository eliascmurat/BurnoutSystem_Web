import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { BannerComponent } from "./banner/banner.component";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    NavbarComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeaderModule { }
