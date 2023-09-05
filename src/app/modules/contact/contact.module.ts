import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoaderModule } from "../../components/loader/loader.module";

@NgModule({
  declarations: [
    ContactComponent
  ],
  exports: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    LoaderModule
  ]
})
export class ContactModule { }
