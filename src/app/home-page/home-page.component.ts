import { Component, OnInit } from '@angular/core';
import { PostsComponent } from '../posts/posts.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],

})
export class HomePageComponent implements OnInit {

  constructor() { }

  searchText;

  ngOnInit(): void {
  }

}
