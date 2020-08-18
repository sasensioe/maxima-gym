import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ReceptionComponent } from './reception.component';
import { InfoRequestsComponent } from './info-requests/info-requests.component';
import { NewClientComponent } from './new-client/new-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { ReceptionGuard } from 'src/app/guards/reception.guard';


const routes: Routes = [
    {
        path: '',
        canActivate: [ReceptionGuard],
        children: [
            {path: '', component: ReceptionComponent, data: {title: 'Reception'}},
            {path: 'requests', component: InfoRequestsComponent, data: {title: 'Info Requests'}},
            {path: 'newClient', component: NewClientComponent, data: {title: 'New Client'}},
            {path: 'updateClient', component: UpdateClientComponent, data: {title: 'Update Client'}},
        ],
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReceptionRoutingModule{}