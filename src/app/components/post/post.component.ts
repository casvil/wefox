import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../../models/api/api.models';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input('data') data: Post;

  constructor() {}

  ngOnInit() {}
}
