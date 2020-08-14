import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../../app-routing.module';
import { DashboardMenuComponent } from './dashboard-menu/dashboard-menu.component';
import { PopUpComponent } from './pop-up/pop-up.component';




@NgModule({
  declarations: [
    DashboardMenuComponent,
    PopUpComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    DashboardMenuComponent,
    PopUpComponent
  ]
})
export class DashboardSharedModule { }
