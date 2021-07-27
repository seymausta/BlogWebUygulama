import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import * as Editor from 'ckeditor5/build/ckeditor';
import { PostService } from '../post.service';
import { Identifiers } from '@angular/compiler';


@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss']
})
export class ValueComponent implements OnInit {

  title = 'My Blog: Seyma is Coding';
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

  constructor(private http:HttpClient, private postService:PostService) { }

  values:Post[]=[];
  content1 : string;
  content2 :string;
  datax : Post;
  

  ngOnInit(){
    /*this.getValues().subscribe(data=>{
      this.values=data
    })*/
  }

  /*getValues(){
    return this.http.get<Post[]>("https://localhost:44323/api/posts")
  }*/

  getValues() {
    this.postService.getValues().subscribe((response: Post[]) => this.values = response);
  } 
  GetSingle(id: number) {
    this.postService.GetSingle(id).subscribe((response: Post) => this.datax = response);
  }
   
  public saveContent( ) {
   console.log("Title saved:"+this.content1);
   console.log("Content saved: " +this.content2);
  }
  
  PostAdd( Title :string,  Content:string) {
    alert(Title + " " +Content);

    let postPersonel: Post = {
      
      title: String(Title),
      content: String(Content)
    };
 
    this.postService.PostAdd(postPersonel).subscribe((response: Post) => {
      if (response) {
        this.values.unshift(response);
        this.datax = response;
      }
    });
  }
  

}
