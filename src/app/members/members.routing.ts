import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { ClientGuard } from '../guards/client.guard';
import { MembersComponent } from './members.component';





const routes: Routes = [

    {
        path: 'members',
        canActivate: [ClientGuard],
        component: MembersComponent,
        children: [

        ]
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MembersRoutingModule{}