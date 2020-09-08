import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { UserGuard } from '../guards/user.guard';

import { DashboardComponent } from './dashboard.component';
import { AdminRoutingModule } from './admin/admin.routing';
import { EditorRoutingModule } from './editor/editor.routing';
import { ReceptionRoutingModule } from './reception/reception.routing';
import { TrainerRoutingModule } from './trainer/trainer.routing';



const routes: Routes = [

    {
        path: 'dashboard',
        canActivate: [UserGuard],
        component: DashboardComponent,
        children: [
            {path: 'admin', loadChildren: () => AdminRoutingModule},
            {path: 'editor', loadChildren: () => EditorRoutingModule},
            {path: 'reception', loadChildren: () => ReceptionRoutingModule},
            {path: 'trainer', loadChildren: () => TrainerRoutingModule},
        ]
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule{}