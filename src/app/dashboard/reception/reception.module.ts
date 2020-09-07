import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from '../../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ReceptionComponent } from './reception.component';
import { NewClientComponent } from './new-client/new-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { SelectClientComponent } from './select-client/select-client.component';
import { DashboardSharedModule } from '../shared/dashboard.shared.module';
import { InfoRequestsComponent } from './info-requests/info-requests.component';
import { MaterialModule } from 'src/app/modules/material.module';
import { InfoRequestComponent } from './info-request/info-request.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [
    ReceptionComponent,
    InfoRequestsComponent,
    NewClientComponent,
    UpdateClientComponent,
    SelectClientComponent,
    InfoRequestComponent,
    MoreInfoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DashboardSharedModule,
    MaterialModule,
    ScrollingModule,
    PipesModule
  ],
  exports: [
    ReceptionComponent,
  ]
})
export class ReceptionModule { }
