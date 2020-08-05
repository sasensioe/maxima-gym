import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../modules/material.module'

import { HomeComponent } from './home/home.component';
import { ActivitiesComponent } from './activities/activities.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { ArticleComponent } from './article/article.component';
import { AppRoutingModule } from '../app-routing.module';
import { PaginatePipe } from '../pipes/paginate.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    HomeComponent,
    ActivitiesComponent,
    FacilitiesComponent,
    NewsComponent,
    ContactComponent,
    ArticleComponent,
    PaginatePipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  exports: [
    HomeComponent,
    ActivitiesComponent,
    FacilitiesComponent,
    NewsComponent,
    ContactComponent,
    ArticleComponent,
    PaginatePipe
  ]
})
export class PagesModule { }
