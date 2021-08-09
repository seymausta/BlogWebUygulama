import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { HttpClient } from '@angular/common/http';
import * as Editor from 'ckeditor5/build/ckeditor';
import { ActivatedRoute } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
  providers:[PostService]
})
export class PostCreateComponent implements OnInit {
  postList:Post[]=[];
 // title : string;
 // content :string;
  post : Post;
  public Editor = Editor; 
  id:number;
  
  postAddForm: FormGroup; 

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
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authService:AuthService ) { }
    
    public res: {dbPath: ''};
   

  createPostForm() {
    this.postAddForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }
  public uploadFinished = (event) => {
    this.res = event;
  }

  public createImgPath = (serverPath: string) => {
    return `https://localhost:44323/${serverPath}`;
  }
  


  ngOnInit(){
    this.createPostForm();
    this.id = this.activatedRoute.snapshot.params['postId']; 
   // this.userId  = this.authService.getCurrentUserId();
  }
  
  /*PostAdd( Title :string,  Content:string) {
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
    
  }*/

  PostAdd(){
    if(this.postAddForm.valid){
      this.post = Object.assign({},this.postAddForm.value)
      //Todo
      this.post.userId = this.authService.getCurrentUserId();
      this.post.imgPath= this.res.dbPath;
      this.postService.PostAdd(this.post);
      
      
    }
  }

  /*PostAdd( Title :string,  Content:string, UserId:number) {
    alert("dfghdf");
    let createPost: Post = {
      
      title: String(Title),
      content: String(Content),
      userId: Number(UserId)
    };
 
    this.postService.PostAdd(createPost).subscribe((response: Post) => {
      if (response) {
        this.postList.unshift(response);
        this.post = response;
      }
    });
    
  }*/

 

}
