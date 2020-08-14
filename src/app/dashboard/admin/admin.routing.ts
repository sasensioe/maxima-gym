import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'


import { AdminComponent } from './admin.component'
import { EditorRoutingModule } from '../editor/editor.routing'
import { ReceptionRoutingModule } from '../reception/reception.routing'
import { UsersRoutingModule } from './users/users.routing'


const routes: Routes = [
    {
        path: '',
        children: [
            {path: '', component: AdminComponent, data: {title: 'Admin'}},
            {path: 'users', loadChildren: () => UsersRoutingModule, data: {title: 'Manage Users'}},
            {path: 'reception', loadChildren: () => ReceptionRoutingModule, data: {title: 'Manage Reception'}},
            {path: 'editor', loadChildren: () => EditorRoutingModule, data: {title: 'Manage News'}},
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule{}