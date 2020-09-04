import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../../app-routing.module';
import { DashboardMenuComponent } from './dashboard-menu/dashboard-menu.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { SelectImageComponent } from './select-image/select-image.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MaterialModule } from 'src/app/modules/material.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    DashboardMenuComponent,
    PopUpComponent,
    SelectImageComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialFileInputModule,
    MaterialModule,
    PipesModule,
    ReactiveFormsModule,
  ],
  exports: [
    DashboardMenuComponent,
    PopUpComponent,
    SelectImageComponent,
    ProfileComponent
  ]
})
export class DashboardSharedModule { }
