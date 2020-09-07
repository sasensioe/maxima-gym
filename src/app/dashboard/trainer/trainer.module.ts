import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularEditorModule } from '@kolkov/angular-editor'
import { MaterialModule } from 'src/app/modules/material.module';
import { DashboardSharedModule } from '../shared/dashboard.shared.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

import { TrainerComponent } from './trainer.component';
import { SelectClientComponent } from './select-client/select-client.component';
import { ManageRoutineComponent } from './manage-routine/manage-routine.component';


@NgModule({
  declarations: [
    TrainerComponent,
    SelectClientComponent,
    ManageRoutineComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    AngularEditorModule,
    DashboardSharedModule,
    AppRoutingModule,
    PipesModule
  ],
  exports: [
    TrainerComponent
  ]
})
export class TrainerModule { }
