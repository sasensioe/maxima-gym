import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../modules/material.module';

import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin.component';
import { NewUserComponent } from './users/new-user/new-user.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { DashboardSharedModule } from '../shared/dashboard.shared.module';
import { SelectUserComponent } from './users/select-user/select-user.component';



@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    NewUserComponent,
    UpdateUserComponent,
    SelectUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    DashboardSharedModule
  ],
  exports: [
    AdminComponent,
    UsersComponent
  ]
})
export class AdminModule { }
