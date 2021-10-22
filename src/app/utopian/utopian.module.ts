import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { UtopianComponent } from './utopian.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [UtopianComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule, 
    RouterModule,
    FlexLayoutModule,
    NgbModule,
    MatExpansionModule
  ],
  exports: [UtopianComponent]
})
export class UtopianModule { }
