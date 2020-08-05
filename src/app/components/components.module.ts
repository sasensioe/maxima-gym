import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms'

import { InfoFormComponent } from './info-form/info-form.component';
import { InfoVideoComponent } from './info-video/info-video.component';
import { MaterialModule } from '../modules/material.module';



@NgModule({
  declarations: [
    InfoFormComponent,
    InfoVideoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    InfoFormComponent,
    InfoVideoComponent
  ]
})
export class ComponentsModule { }
