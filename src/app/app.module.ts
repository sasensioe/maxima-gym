import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { FacilitiesComponent } from './pages/facilities/facilities.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';

import { MaterialModule } from './material/material.module';
import { NewsComponent } from './pages/news/news.component';
import { InfoFormComponent } from './components/info-form/info-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivitiesComponent,
    FacilitiesComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    SidenavComponent,
    NewsComponent,
    InfoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
