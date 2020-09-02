import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginatePipe } from './paginate.pipe';
import { ImagePipe } from './image.pipe';
import { DompurifyPipe } from './dom-purify.pipe';



@NgModule({
  declarations: [
    PaginatePipe,
    ImagePipe,
    DompurifyPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PaginatePipe,
    ImagePipe,
    DompurifyPipe,
  ]
})
export class PipesModule { }
