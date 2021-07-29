import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Post } from '../models/post';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private alertifyService: AlertifyService,
     @Inject('apiUrl') private apiUrl) { 
   }

  getValues(){
    return this.httpClient.get("https://localhost:44323/api/allposts/");
  }
  GetSingle(id: number) {
    return this.httpClient.get("https://localhost:44323/api/detail/?id="+id);
  }
  PostAdd(value: Post) {
    this.alertifyService.success("Post başarıyla eklendi.");
    //this.router.navigateByUrl('/postDetail/'+["value.id"]);
    return this.httpClient.post("https://localhost:44323/api/create/",value);
    
  }
  PostUpdate(post:Post){
    this.alertifyService.success("Post başarıyla güncellendi.");
    this.router.navigateByUrl('/postDetail/'+["post.id"]);
    //return this.httpClient.put(`${this.apiUrl + 'update/'}/${post.id}`,post);
    //return this.httpClient.put(`${this.apiUrl}update/${post.id}`,post);
    return this.httpClient.put("https://localhost:44323/api/update/?post.id"+post.id,post);
   

  }

    
}
