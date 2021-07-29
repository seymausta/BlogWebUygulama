import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { UpdateComponent } from './update/update.component';
import { PostsComponent } from './posts/posts.component';
import { NavComponent } from './nav/nav.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';
import { AlertifyService } from './services/alertify.service';
import { PostCreateComponent } from './posts/post-create/post-create.component';

@NgModule({
  declarations: [
    AppComponent,
    ValueComponent,
    UpdateComponent,
    PostsComponent,
    NavComponent,
    PostDetailComponent,
    PostEditComponent,
    PostCreateComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    CKEditorModule,
    FormsModule,
    NgxPaginationModule
 
  ],
  providers: [AlertifyService,{provide: 'apiUrl', useValue:"localhost:44323/api/"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
