import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../../app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MaterialModule } from '../../modules/material.module';
import { DashboardSharedModule } from '../shared/dashboard.shared.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin.component';
import { NewUserComponent } from './users/new-user/new-user.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';

import { SelectUserComponent } from './users/select-user/select-user.component';


@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    NewUserComponent,
    UpdateUserComponent,
    SelectUserComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    DashboardSharedModule,
    PipesModule
  ],
  exports: [
    AdminComponent,
    UsersComponent,
  ]
})
export class AdminModule { }
