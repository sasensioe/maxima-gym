import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../modules/material.module';
import { PipesModule } from '../pipes/pipes.module';

import { MembersComponent } from './members.component';
import { MembersSharedModule } from './shared/members.shared.module';
import { SidenavComponent } from './shared/sidenav/sidenav.component';


@NgModule({
  declarations: [
    MembersComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    PipesModule,
    MembersSharedModule
  ],
  exports: [
    MembersComponent,
    SidenavComponent
  ]
})
export class MembersModule { }
