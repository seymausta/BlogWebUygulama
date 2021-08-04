import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import * as Editor from 'ckeditor5/build/ckeditor';
import { PostsComponent } from '../posts.component';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
  providers:[PostService]
})
export class PostEditComponent implements OnInit {

  values:Post[]=[];
  post : Post;
  title:string;
  content:string;
  id:number;
  userId:number;

  public Editor = Editor; 
  editorConfig= {
					
    toolbar: {
      items: [
        'heading',
        '|',
        'bold',
        'italic',
        'link',
        'bulletedList',
        'numberedList',
        '|',
        'outdent',
        'indent',
        '|',
        'imageUpload',
        'blockQuote',
        'insertTable',
        'mediaEmbed',
        'undo',
        'redo'
      ]
    },
    language: 'en',
    image: {
      toolbar: [
        'imageTextAlternative',
        'imageStyle:full',
        'imageStyle:side'
      ]
    },
    table: {
      contentToolbar: [
        'tableColumn',
        'tableRow',
        'mergeTableCells'
      ]
    },
      licenseKey: '',
      
    };
  constructor(private activatedRoute: ActivatedRoute, 
    private postService: PostService, 
    private authService:AuthService, 
    private httpClient: HttpClient) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['postId']; 
    this.userId = this.authService.getCurrentUserId(); 
        if (this.id < 1)
        return;

        this.loadPost(this.id);
  }

  loadPost(id) {
    this.httpClient
        .get("https://localhost:44323/api/detail/?id="+id)
            .subscribe((response: Post) => this.post = response
            );
}
  PostUpdate(Id:number,Title :string,  Content:string,UserId:number) {
    let updatePost: Post = {
      id: Number(Id),
      title: String(Title),
      content: String(Content),
      userId:Number(UserId),
    };
    this.postService.PostUpdate(updatePost).subscribe((response: Post) => {
      if (response) {
        this.postService.getValues();
        this.post = response;
      }
    });
    
   
  }

}
