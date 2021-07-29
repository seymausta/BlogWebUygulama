import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import * as Editor from 'ckeditor5/build/ckeditor';
import { PostsComponent } from '../posts.component';

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
  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['postId']; 
  }

  PostUpdate(Id:number,Title :string,  Content:string) {
    let updatePost: Post = {
      id: Number(Id),
      title: String(Title),
      content: String(Content)
    };
    this.postService.PostUpdate(updatePost).subscribe((response: Post) => {
      if (response) {
        this.postService.getValues();
        this.post = response;
      }
    });
    
   
  }

}
