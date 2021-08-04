import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { UpdateComponent } from './update/update.component';
import { PostsComponent } from './posts/posts.component';
import { NavComponent } from './nav/nav.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';
import { AlertifyService } from './services/alertify.service';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { RegisterComponent } from './register/register.component';

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
    RegisterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem('accessToken');
        },
        allowedDomains: ['localhost:44323'],
        disallowedRoutes: []
      }
    })


  ],
  providers: [AlertifyService, { provide: 'apiUrl', useValue: "localhost:44323/api/" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
