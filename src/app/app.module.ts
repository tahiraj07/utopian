import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { UtopianModule } from './utopian/utopian.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatExpansionModule } from '@angular/material/expansion';
@NgModule({
  declarations: [	
    AppComponent 
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UtopianModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
