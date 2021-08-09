import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';
import { PostCreateComponent } from './post-create/post-create.component';

@Component({
  selector: 'app-main',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostService,PostCreateComponent]
})
export class PostsComponent implements OnInit {
  
  totalLength:number;
  page:number=1;
  values:Post[]=[];
  post : Post;
 

  constructor(private http:HttpClient, private postService:PostService,
    public x: PostCreateComponent) { }

  ngOnInit(){
    this.getValues();
  }

  getValues() {
    this.postService.getValues().subscribe((response: Post[]) =>{ this.values = response
    this.totalLength=response.length;});
  } 

}
