import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { TrainerGuard } from 'src/app/guards/trainer.guard';

import { TrainerComponent } from './trainer.component'
import { ProfileComponent } from '../shared/profile/profile.component';
import { SelectClientComponent } from './select-client/select-client.component';
import { ManageRoutineComponent } from './manage-routine/manage-routine.component';


const routes: Routes = [
    {
        path: '',
        canActivate: [TrainerGuard],
        children: [
            {path: '', component: TrainerComponent, data: {title: 'Editor'}},
            {path: 'select-client', component: SelectClientComponent, data: {title: 'Select Client'}},
            {path: 'manage-routine/:id', component: ManageRoutineComponent, data: {title: 'Manage Routine'}},
            {path: 'profile', component: ProfileComponent, data: {title: 'My Profile'}},
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TrainerRoutingModule{}