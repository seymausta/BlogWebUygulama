import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-main',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostService]
})
export class PostsComponent implements OnInit {
  
  totalLength:number;
  page:number=1;

  constructor(private http:HttpClient, private postService:PostService) { }

  ngOnInit(){
    this.getValues()  
  }

  values:Post[]=[];
  post : Post;

  getValues() {
    this.postService.getValues().subscribe((response: Post[]) =>{ this.values = response
    this.totalLength=response.length;});
  } 

}
