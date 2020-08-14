import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { EditorComponent } from './editor.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';


@NgModule({
  declarations: [
    EditorComponent,
    NewArticleComponent,
    UpdateArticleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    EditorComponent,
    NewArticleComponent,
    UpdateArticleComponent
  ]
})
export class EditorModule { }
