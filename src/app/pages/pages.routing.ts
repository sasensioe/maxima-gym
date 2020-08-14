import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'

import { PagesComponent } from './pages.component'
import { HomeComponent } from './home/home.component'
import { ActivitiesComponent } from './activities/activities.component'
import { FacilitiesComponent } from './facilities/facilities.component'
import { NewsComponent } from './news/news.component'
import { ContactComponent } from './contact/contact.component'
import { ArticleComponent } from './article/article.component'


const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {path: '', component: HomeComponent, data: {title: 'Home'}},
            {path: 'activities', component: ActivitiesComponent, data: {title: 'Activities'}},
            {path: 'facilities', component: FacilitiesComponent, data: {title: 'Facilities'}},
            {path: 'news', component: NewsComponent, data: {title: 'News'}},
            {path: 'news/article/:id', component: ArticleComponent, data: {title: 'Article'}},
            {path: 'contact', component: ContactComponent, data: {title: 'Contact'}}
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule{}