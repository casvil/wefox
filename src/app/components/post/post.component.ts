import { Component, Inject, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AppComponent } from '../../app.component';
import { Post } from '../../models/api/api.models';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input('data') data: Post;

  constructor(
    @Inject(AppComponent) private parent: AppComponent,
    private router: Router
  ) {}

  ngOnInit() {
    if (!this.data) {
      const urlPath = this.router.url;
      const pathValues = urlPath.split('/');
      const postId = pathValues[pathValues.length - 1]; // the id is in the last position of the array

      // after finding the id of the selected post -> look for the post object of the parent array of posts
      this.data = this.parent.posts.filter(post => post.id == postId)[0];
    }
  }
}
