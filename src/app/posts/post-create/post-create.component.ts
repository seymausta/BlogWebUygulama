import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { HttpClient } from '@angular/common/http';
import * as Editor from 'ckeditor5/build/ckeditor';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
  providers:[PostService]
})
export class PostCreateComponent implements OnInit {
  postList:Post[]=[];
  title : string;
  content :string;
  post : Post;
  public Editor = Editor; 
  id:number;
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

  constructor(
    private postService: PostService,
    private http:HttpClient,
    private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['postId']; 
  }
  PostAdd( Title :string,  Content:string) {
    let createPost: Post = {
      
      title: String(Title),
      content: String(Content)
    };
 
    this.postService.PostAdd(createPost).subscribe((response: Post) => {
      if (response) {
        this.postList.unshift(response);
        this.post = response;
      }
    });
    
  }

}
