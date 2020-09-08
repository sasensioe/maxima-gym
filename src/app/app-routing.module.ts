import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PagesRoutingModule } from './pages/pages.routing';
import { DashboardRoutingModule } from './dashboard/dashboard.routing'
import { LoginComponent } from './auth/login/login.component';
import { MembersRoutingModule } from './members/members.routing';


const routes: Routes = [

  // path "/" PagesRoutingModule
  // path "/dashboard" DashboardRoutingModule
  // path "/members" MembersRoutingModule

  { path: "login", component: LoginComponent },

  { path: "**", pathMatch: "full", redirectTo:"/" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            PagesRoutingModule,
            DashboardRoutingModule,
            MembersRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
