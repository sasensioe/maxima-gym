import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularEditorModule } from '@kolkov/angular-editor'
import { MaterialModule } from 'src/app/modules/material.module';
import { DashboardSharedModule } from '../shared/dashboard.shared.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

import { EditorComponent } from './editor.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { SelectArticleComponent } from './select-article/select-article.component';


@NgModule({
  declarations: [
    EditorComponent,
    NewArticleComponent,
    UpdateArticleComponent,
    SelectArticleComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    AngularEditorModule,
    DashboardSharedModule,
    AppRoutingModule,
    PipesModule
  ],
  exports: [
    EditorComponent,
    NewArticleComponent,
    UpdateArticleComponent,
  ]
})
export class EditorModule { }
