import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ReceptionComponent } from './reception.component';
import { NewClientComponent } from './new-client/new-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';


@NgModule({
  declarations: [
    ReceptionComponent,
    NewClientComponent,
    UpdateClientComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    ReceptionComponent,
    NewClientComponent,
    UpdateClientComponent
  ]
})
export class ReceptionModule { }
