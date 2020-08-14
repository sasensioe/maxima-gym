import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ActivitiesComponent } from './activities/activities.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { ArticleComponent } from './article/article.component';

import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from '../modules/material.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    ActivitiesComponent,
    FacilitiesComponent,
    NewsComponent,
    ContactComponent,
    ArticleComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
    SharedModule,
    MaterialModule,
    PipesModule
  ],
  exports: [
    PagesComponent,
    HomeComponent,
    ActivitiesComponent,
    FacilitiesComponent,
    NewsComponent,
    ContactComponent,
    ArticleComponent,
  ]
})
export class PagesModule { }
