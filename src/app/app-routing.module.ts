import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { FacilitiesComponent } from './pages/facilities/facilities.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ArticleComponent } from './pages/article/article.component'

const routes: Routes = [
  { path:"home",       component: HomeComponent },
  { path:"activities", component: ActivitiesComponent },
  { path:"facilities", component: FacilitiesComponent },
  { path:"news",       component: NewsComponent },
  { path:"contact",    component: ContactComponent },
  { path:"news/article/:id",component: ArticleComponent },
  { path:"**", pathMatch: "full", redirectTo:"home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
