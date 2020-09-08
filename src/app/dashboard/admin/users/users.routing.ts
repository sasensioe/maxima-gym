import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'


import { UsersComponent } from './users.component'
import { NewUserComponent } from './new-user/new-user.component'
import { UpdateUserComponent } from './update-user/update-user.component'
import { SelectUserComponent } from './select-user/select-user.component'


const routes: Routes = [
    {
        path: '',
        children: [
            {path: '', component: UsersComponent, data: {title: 'Users'}},
            {path: 'new-user', component: NewUserComponent, data: {title: 'New User'}},
            {path: 'select-user', component: SelectUserComponent, data: {title: 'Select User'}},
            {path: 'update-user/:id', component: UpdateUserComponent, data: {title: 'Update User'}},
        ],
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule{}