import { Component, OnInit } from '@angular/core';

import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Article } from 'src/app/models/article.model';
import { UploadsService } from 'src/app/services/dashboard-services/uploads.service';
import { ArticlesService } from 'src/app/services/dashboard-services/articles.service';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  private articleId: string;
  private article: Article;

  public updateArticleForm = this.formBuilder.group({
    category: ['', Validators.required],
    title: ['', Validators.required],
    description: ['', Validators.required],
    img: [''],
    body: ['', Validators.required]
  })

  constructor( private formBuilder: FormBuilder,
               private articlesService: ArticlesService,
               private uploadsService: UploadsService,
               private route: ActivatedRoute,
               private popUpService: PopUpService ) {
                 this.articleId = this.route.snapshot.params.id;
               }

  ngOnInit(): void {
    this.articlesService.getArticle(this.articleId)
      .then(resp => {
        this.article = resp;
        this.updateArticleForm.setValue({
          category: resp.category,
          title: resp.title,
          description: resp.description,
          img: '',
          body: resp.body
        })
      })
      .catch(error => this.popUpService.openPopUp(error));
    
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

  updateArticle(){

    if(this.updateArticleForm.valid){

      const img = this.updateArticleForm.get('img').value;

      if(img){
        this.articlesService.updateArticle(this.articleId, this.updateArticleForm.value)
        .then((resp: {ok:boolean, article:Article}) => {
          this.popUpService.openPopUp(resp)
          const img = this.updateArticleForm.get('img').value['files'][0];
          this.uploadsService.uploadFile(img, 'articles', this.articleId);
        })
      }else{
        this.articlesService.updateArticle(this.articleId, this.updateArticleForm.value)
        .then((resp: {ok:boolean, article:Article}) => {
          this.popUpService.openPopUp(resp)
        })
      }
    }

    if(this.updateArticleForm.invalid){
      this.popUpService.openPopUp({ok: false, msg: 'Please, check the form'})
    }
  }

}
