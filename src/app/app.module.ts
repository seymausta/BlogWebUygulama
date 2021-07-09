import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';



@NgModule({
  declarations: [
    AppComponent,
    ValueComponent,
   
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CKEditorModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
