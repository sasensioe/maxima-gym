import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Article } from 'src/app/models/article.model';
import { UploadsService } from 'src/app/services/dashboard-services/uploads.service';
import { ArticlesService } from 'src/app/services/dashboard-services/articles.service';
import { PopUpService } from 'src/app/services/dashboard-services/pop-up.service';

interface Filter {
  value: string | number;
  viewValue: string;
}

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent {

  public newArticleForm = this.formBuilder.group({
    category: ['', Validators.required],
    title: ['', Validators.required],
    description: ['', Validators.required],
    img: ['', Validators.required],
    body: ['', Validators.required]
  })

  constructor( private formBuilder: FormBuilder,
               private articlesService: ArticlesService,
               private uploadsService: UploadsService,
               private popUpService: PopUpService ) { }

  categories: Filter[] = [
    {value: 'all', viewValue: 'All categories'},
    {value: 'nutrition', viewValue: 'Nutrition'},
    {value: 'gym', viewValue: 'Gym'},
    {value: 'fitness', viewValue: 'Fitness'},
    {value: 'cardio', viewValue: 'Cardio'},
    {value: 'musculation', viewValue: 'Musculation'},
    {value: 'lifestyle', viewValue: 'Lifestyle'},
    {value: 'health', viewValue: 'Health'}
  ]

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '300px',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      {class: 'Nunito', name: 'Nunito'}
    ],
    customClasses: [
    {
      name: 'quote',
      class: 'quote',
    },
    {
      name: 'redText',
      class: 'redText'
    },
    {
      name: 'titleText',
      class: 'titleText',
      tag: 'h1',
    },
  ],
  uploadWithCredentials: false,
  sanitize: false,
  toolbarPosition: 'top',
  toolbarHiddenButtons: [
    ['insertImage', 'insertVideo', 'insertHorizontalRule', 'textColor', 'backgroundColor', 'customClasses', 'toggleEditorMode']
  ]
  
  };

  newArticle(){

    if(this.newArticleForm.valid){

      this.articlesService.newArticle(this.newArticleForm.value)
        .then((resp: {ok:boolean, article:Article}) => {
          this.popUpService.openPopUp(resp);
          const newArticleId = resp.article.id;
          const img = this.newArticleForm.get('img').value['files'][0];
          this.uploadsService.uploadFile(img, 'articles', newArticleId);
        })
    }

    if(this.newArticleForm.invalid){
      this.popUpService.openPopUp({ok: false, msg: 'Please, check the form'});
    }
  }

}
