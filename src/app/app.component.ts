import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  postsSubscription$: Subscription;
  posts: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.postsSubscription$ = this.apiService
      .getPosts()
      .subscribe((res: Response) => (this.posts = res));
  }
}
