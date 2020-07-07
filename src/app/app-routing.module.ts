import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { FacilitiesComponent } from './pages/facilities/facilities.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path:"home",       component: HomeComponent },
  { path:"activities", component: ActivitiesComponent },
  { path:"facilities", component: FacilitiesComponent },
  { path:"contact",    component: ContactComponent },
  { path:"**", pathMatch: "full", redirectTo:"home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
