import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';



@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers:[PostService]
})
export class PostDetailComponent implements OnInit {

  post: Post;
  id:number;
  title:string;
  content:string;
  
  constructor(private activatedRoute: ActivatedRoute, private postService: PostService ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.GetSingle(params["postId"])
    })
  }

  GetSingle(postId: number) {
    this.postService.GetSingle(postId).subscribe((response: Post) => this.post = response);
  }

}
