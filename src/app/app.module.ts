import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    ValueComponent,
    UpdateComponent,
    MainComponent,
     
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    CKEditorModule,
    FormsModule
 
  ],
  providers: [{provide: 'apiUrl', useValue:"localhost:44323/api/"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
