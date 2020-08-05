import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialModule } from 'src/app/modules/material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SidenavComponent,
  ]
})
export class SharedModule { }
