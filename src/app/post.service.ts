import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Post } from './models/post';
import { Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  
  constructor(private httpClient: HttpClient, @Inject('apiUrl') private apiUrl) { 
   }

  getValues(){
    return this.httpClient.get("https://localhost:44323/api/allposts/");
  }
  GetSingle(id: number) {
    return this.httpClient.get("https://localhost:44323/api/"+id);
  }
  PostAdd(value: Post) {
    return this.httpClient.post("https://localhost:44323/api/create/",value);
  }
  PostUpdate(post:Post){
    return this.httpClient.put("https://localhost:44323/api/update/",post);
  }

    
}
