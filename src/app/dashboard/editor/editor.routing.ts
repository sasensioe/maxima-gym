import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { NewArticleComponent } from './new-article/new-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { EditorComponent } from './editor.component';
import { EditorGuard } from 'src/app/guards/editor.guard';
import { SelectArticleComponent } from './select-article/select-article.component';
import { ProfileComponent } from '../profile/profile.component';


const routes: Routes = [
    {
        path: '',
        canActivate: [EditorGuard],
        children: [
            {path: '', component: EditorComponent, data: {title: 'Editor'}},
            {path: 'newArticle', component: NewArticleComponent, data: {title: 'New Article'}},
            {path: 'selectArticle', component: SelectArticleComponent, data: {title: 'Select Article'}},
            {path: 'updateArticle/:id', component: UpdateArticleComponent, data: {title: 'Update Article'}},
            {path: 'profile', component: ProfileComponent, data: {title: 'My Profile'}},
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditorRoutingModule{}