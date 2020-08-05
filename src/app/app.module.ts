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
import { SharedModule } from './components/shared/shared.module';
import { PagesModule } from './pages/pages.module';

/** FIREBASE */

import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { environment } from 'src/environments/environment'


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    PagesModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
