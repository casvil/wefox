import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Post } from './models/api/api.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  postsSubscription$: Observable<any>;
  posts: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.postsSubscription$ = this.apiService.getPosts();
  }
}
