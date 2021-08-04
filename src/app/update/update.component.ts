import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router'; 
import { Post } from '../models/post';
import * as Editor from 'ckeditor5/build/ckeditor';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  values:Post[]=[];
  post : Post;
  id:number;
  title:string;
  content:string;

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
  
  constructor(private postService:PostService,private router: Router) { }

  ngOnInit(): void {
  }
 
      /*PostUpdate(Id:number,Title :string,  Content:string) {
        alert(Id+ " "+Title + " " +Content);
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
      }*/

      /*GetSingle(id: number) {
        this.postService.GetSingle(id).subscribe((response: Post) => this.post = response);
      }*/

  

}
