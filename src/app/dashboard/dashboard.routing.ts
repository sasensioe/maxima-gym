import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../guards/auth.guard';

import { DashboardComponent } from './dashboard.component';
import { AdminRoutingModule } from './admin/admin.routing';
import { EditorRoutingModule } from './editor/editor.routing';
import { ReceptionRoutingModule } from './reception/reception.routing';


const routes: Routes = [

    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent,
        children: [
            {path: 'admin', loadChildren: () => AdminRoutingModule},
            {path: 'editor', loadChildren: () => EditorRoutingModule},
            {path: 'reception', loadChildren: () => ReceptionRoutingModule},
        ]
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule{}