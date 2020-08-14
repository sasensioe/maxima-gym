import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'

import { NewArticleComponent } from './new-article/new-article.component'
import { UpdateArticleComponent } from './update-article/update-article.component'
import { EditorComponent } from './editor.component'


const routes: Routes = [
    {
        path: '',
        children: [
            {path: '', component: EditorComponent, data: {title: 'Editor'}},
            {path: 'newArticle', component: NewArticleComponent, data: {title: 'New Article'}},
            {path: 'updateArticle', component: UpdateArticleComponent, data: {title: 'Update Article'}},

        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditorRoutingModule{}