import { Component, OnInit } from '@angular/core';

import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UploadsService } from 'src/app/services/dashboard-services/uploads.service';
import { ArticlesService } from 'src/app/services/dashboard-services/articles.service';
import { PopUpService } from 'src/app/services/dashboard-services/pop-up.service';

interface Filter {
  value: string | number;
  viewValue: string;
}

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {

  private _articleId: string;

  public updateArticleForm = this._formBuilder.group({
    category: ['', Validators.required],
    title: ['', Validators.required],
    description: ['', Validators.required],
    img: [''],
    body: ['', Validators.required]
  })

  constructor( private _formBuilder: FormBuilder,
               private _articlesService: ArticlesService,
               private _uploadsService: UploadsService,
               private _activatedRoute: ActivatedRoute,
               private _popUpService: PopUpService ) {
                 this._articleId = this._activatedRoute.snapshot.params.id;
               }

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

  ngOnInit() {

    this._articlesService.getArticleById(this._articleId)
      .then(article => {
        this.updateArticleForm.setValue({
          category: article.category,
          title: article.title,
          description: article.description,
          img: '',
          body: article.body
        })
      })
      .catch(error => this._popUpService.openPopUp(error));
    
  }

  updateArticle(){

    if(this.updateArticleForm.valid){

      const img = this.updateArticleForm.get('img').value;

      this._articlesService.updateArticle(this._articleId, this.updateArticleForm.value)
        .then((resp: any) => {
          this._popUpService.openPopUp(resp);
          if(img){
            const imgSelected = this.updateArticleForm.get('img').value['files'][0];
            this._uploadsService.uploadFile(imgSelected, 'articles', this._articleId);
          }
        })
        .catch(error => {
          this._popUpService.openPopUp(error.error);
        })
        
    }

    if(this.updateArticleForm.invalid){
      const error = {
        ok: false,
        msg: 'Please, check the form'
      }
      this._popUpService.openPopUp(error);
    }
  }

}
