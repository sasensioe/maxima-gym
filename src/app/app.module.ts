import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/** ROUTING */

import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module'

/** BROWSER-ANIMATIONS */

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** CUSTOM MODULES */

import { MaterialModule } from './modules/material.module'
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module'

/** FIREBASE */

import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { environment } from 'src/environments/environment'
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    PagesModule,
    DashboardModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
