import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from '../../app-routing.module';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MaterialModule } from 'src/app/modules/material.module';




@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialFileInputModule,
    MaterialModule,
    ScrollingModule
  ],
  exports: [

  ]
})
export class MembersSharedModule { }
