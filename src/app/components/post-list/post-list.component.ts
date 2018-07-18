import { Component, OnInit, Inject } from '@angular/core';

import { AppComponent } from '../../app.component';
import { Post } from '../../models/api/api.models';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: any;

  constructor(@Inject(AppComponent) private parent: AppComponent) {}

  ngOnInit() {
    this.parent.postsSubscription$.subscribe(posts => (this.posts = posts));
  }
}
