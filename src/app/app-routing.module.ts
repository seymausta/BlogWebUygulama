import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValueComponent } from './value/value.component';
import { UpdateComponent } from './update/update.component';
import { PostsComponent} from './posts/posts.component';
import { NavComponent } from './nav/nav.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';
 
const routes: Routes = [
  {path: 'posts', component: PostsComponent},
  {path: 'create', component: ValueComponent},
  {path: 'update/:postId', component: PostEditComponent},
  {path: 'postDetail/:postId', component: PostDetailComponent},
  {path: '**', redirectTo:"posts", pathMatch:"full"},

];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }