import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { PostEditComponent } from '../post-edit/post-edit.component';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers:[PostService,PostEditComponent]
})
export class PostDetailComponent implements OnInit {

  post: Post;
  id:number;
  title:string;
  content:string;
  imgPath:string;
  
  constructor(private activatedRoute: ActivatedRoute, 
    private postService: PostService,
     private httpClient: HttpClient,
     public x: PostEditComponent ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.GetSingle(params["postId"])
    });
  }

  GetSingle(postId: number) {
    this.postService.GetSingle(postId).subscribe((response: Post) => this.post = response);
   
  }

  

}
