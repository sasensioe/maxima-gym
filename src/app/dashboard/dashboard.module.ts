import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../modules/material.module';
import { PipesModule } from '../pipes/pipes.module';

import { AdminModule } from './admin/admin.module';
import { EditorModule } from './editor/editor.module';
import { ReceptionModule } from './reception/reception.module';

import { DashboardComponent } from './dashboard.component';
import { TrainerComponent } from './trainer/trainer.component';
import { DashboardSharedModule } from './shared/dashboard.shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    TrainerComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    PipesModule,
    AdminModule,
    EditorModule,
    ReceptionModule,
    DashboardSharedModule
  ],
  exports: [
    DashboardComponent,
    TrainerComponent,
  ]
})
export class DashboardModule { }
