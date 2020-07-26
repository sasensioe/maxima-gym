import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatInputModule
  ],
  exports: [
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatInputModule
  ]
})
export class MaterialModule { }
