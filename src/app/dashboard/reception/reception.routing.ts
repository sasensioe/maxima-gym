import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ReceptionGuard } from 'src/app/guards/reception.guard';

import { ReceptionComponent } from './reception.component';
import { InfoRequestsComponent } from './info-requests/info-requests.component';
import { NewClientComponent } from './new-client/new-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { SelectClientComponent } from './select-client/select-client.component';
import { ProfileComponent } from '../shared/profile/profile.component';


const routes: Routes = [
    {
        path: '',
        canActivate: [ReceptionGuard],
        children: [
            {path: '', component: ReceptionComponent, data: {title: 'Reception'}},
            {path: 'requests', component: InfoRequestsComponent, data: {title: 'Info Requests'}},
            {path: 'new-client', component: NewClientComponent, data: {title: 'New Client'}},
            {path: 'select-client', component: SelectClientComponent, data: {title: 'Select Client'}},
            {path: 'update-client/:id', component: UpdateClientComponent, data: {title: 'Update Client'}},
            {path: 'profile', component: ProfileComponent, data: {title: 'My Profile'}},
        ],
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReceptionRoutingModule{}